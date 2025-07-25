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

document.addEventListener('mousemove', function(e) {
    // Create cursor trail
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
    document.body.appendChild(cursor);
    
    setTimeout(() => cursor.remove(), 500);
    
    // Create sparkles randomly
    if (Math.random() < 0.9) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = e.clientX - 2 + 'px';
        sparkle.style.top = e.clientY - 2 + 'px';
        
        const dx = (Math.random() - 0.5) * 60 + 'px';
        const dy = (Math.random() - 0.5) * 60 + 'px';
        sparkle.style.setProperty('--dx', dx);
        sparkle.style.setProperty('--dy', dy);
        
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 800);
    }
});