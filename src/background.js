let lastTabId = -1
let confettiShown = false

chrome.tabs.onCreated.addListener((tab) => {
  confettiShown = false
  lastTabId = tab.id
})

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url !== 'chrome://newtab/' && tabId === lastTabId && !confettiShown) {
    chrome.scripting.executeScript({
      target: {
        tabId: tab.id,
        allFrames: true,
      },
      files: [
        'lib/confetti.browser.js',
        'src/main.js'
      ],
    })
    confettiShown = true
  }
})