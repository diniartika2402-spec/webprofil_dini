const navLinks = document.querySelectorAll(".nav-links li a");
const sections = document.querySelectorAll("main section");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    sections.forEach(sec => sec.classList.remove("active"));
    const target = document.getElementById(link.dataset.target);
    target.classList.add("active");

    target.classList.remove("slide");
    void target.offsetWidth; 
    target.classList.add("slide", "active");

    window.scrollTo(0,0);
  });
});

const darkBtn = document.getElementById("darkModeBtn");
darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === ""){
      alert("Harap isi semua field ✨");
    } else {
      alert("Terima kasih! Pesanmu sudah terkirim 💕");
      form.reset();
    }
  });
}

const welcomeScreen = document.getElementById("welcome-screen");
const startBtn = document.getElementById("startBtn");
if (startBtn) {
  startBtn.addEventListener("click", () => {
    welcomeScreen.style.opacity = "0";
    setTimeout(() => {
      welcomeScreen.style.display = "none";
    }, 600);
    document.getElementById("home").classList.add("active");
  });
}
