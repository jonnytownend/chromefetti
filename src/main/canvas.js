function createCanvas() {
  const canvas = document.createElement('canvas')
  canvas.id = 'confetti-canvas'
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  canvas.style.position = 'fixed'
  canvas.style.top = 0
  canvas.style.zIndex = 1000
  canvas.style.pointerEvents = 'none'
  document.body.appendChild(canvas)
  return canvas
}

function getCanvas() {
  // const canvas = document.getElementById('confetti-canvas')
  // if (!canvas) {
  //   return createCanvas()
  // }
  // return canvas
  return createCanvas()
}