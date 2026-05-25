const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
  
  setTimeout(() => {
  lenis.scrollTo(500)
}, 2000);
console.log(lenis);



