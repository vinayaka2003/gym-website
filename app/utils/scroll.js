export const smoothScrollTo = (e, href) => {
  if (e) e.preventDefault();
  const section = document.querySelector(href);
  if (!section) return;

  window.scrollTo({
    top: section.offsetTop,
    behavior: "smooth",
  });

  window.history.pushState(null, "", href);
};
