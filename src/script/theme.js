let isDark = localStorage.getItem("theme") === "dark";

const initTheme = () => {
  const themeToggle = document.getElementById("theme-toggle");
  if (isDark) {
    document.body.classList.add("dark-theme");
    themeToggle.classList.add("dark");
  } else {
    themeToggle.classList.remove("dark");
  }
};

const toggleTheme = () => {
  isDark = document.body.classList.toggle("dark-theme");
  document.getElementById("theme-toggle").classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
};

export { initTheme, toggleTheme };
