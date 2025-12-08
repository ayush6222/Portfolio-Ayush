export const smoothScrollTo = (id) => {
  const el = document.querySelector(id);
  if (!el) return;

  const offset = 70;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
};
