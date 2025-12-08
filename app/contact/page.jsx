"use client"

import FloatingIcons from "../components/Contact/FloatingIcons"
import ContactForm from "../components/Contact/ContactForm"
import './styles.css';

export default function ContactPage() {
  return (
    <section
      className="
        relative w-full min-h-screen 
        flex flex-col items-center justify-center
        bg-gradient-to-br from-[#f3f3f3] to-[#e0e0e0]
        dark:from-[#0d0d0d] dark:to-[#1a1a1a]
        py-16 px-4
      "
    >
      <div className="left absolute left-10 lg:left-10 top-1/2 -translate-y-1/2 hidden md:block">
        <FloatingIcons side="left" />
      </div>

      <div className="right absolute right-10 lg:right-10 top-1/2 -translate-y-1/2 hidden md:block ">
        <FloatingIcons side="right" />
      </div>

      <div className="text-center mb-12">
       <h1
  className="
    text-4xl font-bold 
    text-black dark:text-white        /* <-- fix text color */
    border-2 border-black dark:border-white 
    px-8 py-4 inline-block mb-6
  "
>
  CONTACT
</h1>

        <p className="text-gray-700 dark:text-gray-300 text-lg mb-2">Fill the form below. I will connect soon.</p>
        <div className="w-16 h-1 bg-black dark:bg-white mx-auto mt-4" />
      </div>

      <div className="w-full max-w-2xl">
        <ContactForm />
      </div>
    </section>
  )
}
