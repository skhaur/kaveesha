// script.js
(() => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
  
    if (!lightbox || !lightboxImg) return;
  
    const open = (src, alt = "") => {
      lightbox.classList.add("isOpen");
      lightbox.setAttribute("aria-hidden", "false");
      lightboxImg.src = src;
      lightboxImg.alt = alt || "Expanded photo";
      document.body.style.overflow = "hidden";
    };
  
    const close = () => {
      lightbox.classList.remove("isOpen");
      lightbox.setAttribute("aria-hidden", "true");
      lightboxImg.src = "";
      lightboxImg.alt = "";
      document.body.style.overflow = "";
    };
  
    // Click any gallery item -> open
    document.querySelectorAll(".galleryItem").forEach((btn) => {
      btn.addEventListener("click", () => {
        const img = btn.querySelector("img");
        const full = btn.getAttribute("data-full") || (img ? img.src : "");
        const alt = img ? img.alt : "";
        if (full) open(full, alt);
      });
    });
  
    // Close handlers (backdrop or X)
    lightbox.addEventListener("click", (e) => {
      const target = e.target;
      if (target && target.getAttribute && target.getAttribute("data-close") === "true") {
        close();
      }
    });
  
    // ESC to close
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightbox.classList.contains("isOpen")) close();
    });
  })();
  