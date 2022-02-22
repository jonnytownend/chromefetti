const checkboxId = 'every-page-checkbox'

document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.sync.get('confettiEveryPage', ({ confettiEveryPage }) => {
    if (confettiEveryPage) {
      document.getElementById(checkboxId).setAttribute('checked', true)
    }
  })
})

document.getElementById(checkboxId).addEventListener('click', (event) => {
  chrome.storage.sync.set({ confettiEveryPage: event.target.checked })
})