const sections = [...document.querySelectorAll("main section[id]")];
const links = [...document.querySelectorAll(".nav-links a")];

const setActiveLink = () => {
  const current = sections
    .map((section) => ({
      id: section.id,
      top: Math.abs(section.getBoundingClientRect().top - 92),
    }))
    .sort((a, b) => a.top - b.top)[0];

  links.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current?.id}`);
  });
};

setActiveLink();
window.addEventListener("scroll", setActiveLink, { passive: true });

document.querySelectorAll(".demo-card video").forEach((video) => {
  const enforceDemoSpeed = () => {
    video.defaultPlaybackRate = 2;
    video.playbackRate = 2;
  };

  enforceDemoSpeed();
  video.addEventListener("loadedmetadata", enforceDemoSpeed);
  video.addEventListener("play", enforceDemoSpeed);
  video.play().catch(() => {
    // Native controls remain available when a browser blocks autoplay.
  });
});
