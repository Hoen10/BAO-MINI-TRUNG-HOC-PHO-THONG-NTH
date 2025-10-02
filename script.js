// Script hiệu ứng cho web biển Đồng Châu

// Hiện dần các section khi cuộn xuống
const sections = document.querySelectorAll("section");

const options = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});

// Hiệu ứng smooth scroll khi click link trong web (nếu có menu)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
