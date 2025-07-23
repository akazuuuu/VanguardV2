const navbar = document.getElementById("navbar");
const video = document.getElementById("heroVideo");
let lastScrollY = 0;

// Ensure video duration is accessible
video.addEventListener("loadedmetadata", () => {
  const videoDuration = video.duration;

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollFraction = scrollY / maxScroll;

    // Scroll controls video playback speed and direction
    let direction = scrollY > lastScrollY ? 1 : -1;
    lastScrollY = scrollY;

    let newTime = video.currentTime + direction * 0.03;
    newTime = Math.max(0, Math.min(videoDuration, newTime));
    video.currentTime = newTime;

    // Navbar shrink
    if (scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});