"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [emailError, setEmailError] = useState("")
  const [phoneError, setPhoneError] = useState("")

  const formValid =
    formData.name.trim() && formData.email.trim() && formData.message.trim() && !emailError && !phoneError

  const validateEmail = (email) => {
    if (!email) return setEmailError("")
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    setEmailError(regex.test(email) ? "" : "Invalid email format")
  }

  const validatePhone = (phone) => {
    if (!phone) return setPhoneError("")
    const regex = /^[0-9]{10}$/
    setPhoneError(regex.test(phone) ? "" : "Enter a valid 10-digit number")
  }

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const sendEmail = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )

      setSuccess(true)
      e.target.reset()
      setFormData({ name: "", email: "", phone: "", message: "" })

      setTimeout(() => setSuccess(false), 2500)
    } catch (error) {
      alert("Something went wrong!")
    }

    setLoading(false)
  }

  return (
    <motion.form
      onSubmit={sendEmail}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8 max-w-xl mx-auto"
    >
      {/* INPUTS */}
      {["name", "email", "phone"].map((field) => (
        <div key={field} className="relative w-full">
          <input
            name={field}
            type={field === "email" ? "email" : "text"}
            maxLength={field === "phone" ? 10 : undefined}
            required={field !== "phone"}
            value={formData[field]}
            onChange={(e) => {
              handleChange(e)
              if (field === "email") validateEmail(e.target.value)
              if (field === "phone") validatePhone(e.target.value)
            }}
            className="
              peer w-full bg-transparent border-b-2
              border-black dark:border-white
              py-3 text-lg text-black dark:text-white
              focus:outline-none placeholder-transparent
            "
            placeholder={field}
          />
          <label
            className={`
              absolute left-0 transition-all pointer-events-none
              text-gray-600 dark:text-gray-300
              ${formData[field] ? "-top-3 text-xs" : "top-3 text-sm"}
              peer-focus:-top-3 peer-focus:text-xs
            `}
          >
            {field === "name" && "NAME*"}
            {field === "email" && "EMAIL*"}
            {field === "phone" && "PHONE NUMBER"}
          </label>

          {field === "email" && emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}

          {field === "phone" && phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
        </div>
      ))}

      {/* MESSAGE FIELD */}
      <div className="relative">
        <textarea
          name="message"
          rows="4"
          maxLength={500}
          required
          value={formData.message}
          onChange={handleChange}
          className="
            peer w-full bg-transparent border-2 rounded-md
            border-black dark:border-white
            p-4 pt-7 text-lg text-black dark:text-white
            focus:outline-none placeholder-transparent
          "
          placeholder="message"
        />

        <label
          className={`
            absolute left-4 transition-all pointer-events-none
            text-gray-600 dark:text-gray-300
            ${formData.message ? "top-1 text-xs" : "top-5 text-sm"}
            peer-focus:top-1 peer-focus:text-xs
          `}
        >
          MESSAGE*
        </label>

        <p
          className={`text-xs mt-1 text-right ${
            formData.message.length >= 500 ? "text-red-500" : "text-gray-600 dark:text-gray-400"
          }`}
        >
          {formData.message.length}/500
        </p>
      </div>

      {/* SUBMIT BUTTON */}
      <button
        type="submit"
        disabled={!formValid || loading}
        className={`
          mx-auto block px-10 py-3 border-t-2 border-b-2
          border-black dark:border-white text-sm tracking-widest
          transition-opacity
          ${
            formValid
              ? "text-black dark:text-white hover:opacity-70"
              : "text-gray-400 dark:text-gray-600 cursor-not-allowed opacity-40"
          }
        `}
      >
        {loading ? "SENDING..." : "SUBMIT"}
      </button>

      {/* SUCCESS POPUP */}
      {success && (
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="
            fixed bottom-6 right-6 px-6 py-3 bg-green-600
            text-white rounded-lg shadow-lg text-sm
          "
        >
          ✔ Message Sent Successfully!
        </motion.div>
      )}
    </motion.form>
  )
}
