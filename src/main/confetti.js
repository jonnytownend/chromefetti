function fireConfetti(canvas) {
  var myConfetti = confetti.create(canvas, {
    resize: true,
  })

  myConfetti({
    angle: randomInRange(55, 125),
    spread: randomInRange(100, 200),
    particleCount: randomInRange(150, 300),
    origin: { y: 0.7 },
    startVelocity: 55,
  })
}