let lastTabId = -1
let confettiShown = false

// On first install, set confettiEveryPage to true
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ confettiEveryPage: true }, () => {})
})

// On new tab created, reset confettiShown
chrome.tabs.onCreated.addListener((tab) => {
  confettiShown = false
  lastTabId = tab.id
})

// On tab update, show confetti if required
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  chrome.storage.sync.get('confettiEveryPage', ({ confettiEveryPage }) => {
    if (confettiEveryPage && tab.url !== 'chrome://newtab/' && tabId === lastTabId && !confettiShown) {
      chrome.scripting.executeScript({
        target: {
          tabId: tab.id,
        },
        files: [
          'lib/confetti.browser.js',
          'src/main.js'
        ],
      })
      confettiShown = true
    }
  })
})

// Show confetti when extension icon clicked
chrome.action.onClicked.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tabId = tabs[0].id
    console.log('Jonny - tab:', tabId)
    chrome.scripting.executeScript({
      target: {
        tabId,
      },
      files: [
        'lib/confetti.browser.js',
        'src/main.js'
      ],
    })
  })
})