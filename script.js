const logo = document.getElementById("more");
const tray = document.getElementById("tray");
const closeTray = document.getElementById("closeTray");

// Logo click → tray open
logo.addEventListener("click", () => {
  tray.classList.add("open");
});

// Right arrow click → tray close
closeTray.addEventListener("click", () => {
  tray.classList.remove("open");
});
