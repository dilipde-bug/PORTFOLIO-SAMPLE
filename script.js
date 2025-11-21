console.log("Portfolio Ready!");

// Smooth scrolling for navbar links
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Set footer year automatically
  document.getElementById("year").innerText = new Date().getFullYear();
});
