function run() {
  const canvas = getCanvas()
  fireConfetti(canvas)

  // Set timeout to remove confetti canvas after 3s
  setTimeout(() => {
    canvas.remove()
  }, 4000)
}

run()