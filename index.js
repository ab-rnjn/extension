import ytScript from "./src/youtube.js";

chrome.tabs.query({ active: true }, (tabs) => {
  const tab = tabs[0];
  console.log("title of the tab", tab.title);
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: ytScript,
  });
});
