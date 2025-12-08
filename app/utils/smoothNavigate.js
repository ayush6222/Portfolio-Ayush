"use client";

import { useRouter, usePathname } from "next/navigation";

export function useSmoothNavigate() {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (!el) return;

    const offset = 70;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: "smooth" });
  };

  const goTo = (id) => {
    if (pathname === "/") {
      scrollToSection(id);
    } else {
      router.push("/");

      setTimeout(() => {
        scrollToSection(id);
      }, 400); 
    }
  };

  return { goTo };
}
