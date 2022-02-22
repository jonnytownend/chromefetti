function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function createCanvas() {
  const canvas = document.createElement('canvas')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  canvas.style.position = 'fixed'
  canvas.style.top = 0
  canvas.style.zIndex = 1000
  canvas.style.pointerEvents = 'none'
  return canvas
}

function run() {
  const canvas = createCanvas()
  document.body.appendChild(canvas)

  var myConfetti = confetti.create(canvas, {
    resize: true,
  })

  // Fire confetti
  myConfetti({
    angle: randomInRange(55, 125),
    spread: randomInRange(100, 200),
    particleCount: randomInRange(150, 300),
    origin: { y: 0.7 },
    startVelocity: 55,
  })

  // Set timeout to remove confetti canvas after 3s
  setTimeout(() => {
    canvas.remove()
  }, 3000)
}

run()