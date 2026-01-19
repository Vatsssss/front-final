document.addEventListener("DOMContentLoaded", function () {
  const navbarContainer = document.getElementById("navbar-container");
  navbarContainer.style.position = "fixed";
  navbarContainer.style.top = "0";
  navbarContainer.style.left = "0";
  navbarContainer.style.width = "100%";
  navbarContainer.style.zIndex = "1000";
  fetch("../compontents/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      navbarContainer.innerHTML = data;

      const menuBtn = document.getElementById("menuBtn");
      const drawer = document.getElementById("drawer");
      const overlay = document.getElementById("drawer-overlay");

      // Open drawer
      menuBtn.addEventListener("click", () => {
        drawer.classList.add("open");
        overlay.classList.add("active");
      });

      // Close drawer when overlay clicked
      overlay.addEventListener("click", () => {
        drawer.classList.remove("open");
        overlay.classList.remove("active");
      });

      // Optional: close drawer when a link is clicked
      drawer.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          drawer.classList.remove("open");
          overlay.classList.remove("active");
        });
      });
    })
    .catch((error) => {
      console.error("Error loading navbar:", error);
    });
});
