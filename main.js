function toggleTheme(isDarkTheme) {
  if (isDarkTheme) {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
  } else {
    const nav = document.querySelector(".navbar");
    console.log(nav.classList.contains("bg-dark"));
  }
}

console.log("Function is being called main");
