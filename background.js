chrome.browserAction.onClicked.addListener(function(activeTab){
    chrome.tabs.onCreated.addListener({url: "chrome://newtab"})
});

