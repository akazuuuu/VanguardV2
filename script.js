const navbar = document.getElementById("navbar");
const video = document.getElementById("heroVideo");
let lastScrollY = 0;

function handleScroll() {
  const scrollY = window.scrollY;
  if (scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  if (video) {
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollFraction = scrollY / maxScroll;

    let direction = scrollY > lastScrollY ? 1 : -1;
    lastScrollY = scrollY;

    let newTime = video.currentTime + direction * 0.03;
    newTime = Math.max(0, Math.min(video.duration, newTime));
    video.currentTime = newTime;
  }
}

if (video) {
  video.addEventListener("loadedmetadata", () => {
    window.addEventListener("scroll", handleScroll);
  });
} else {
  window.addEventListener("scroll", handleScroll);
}
