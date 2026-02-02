chrome.action.onClicked.addListener((tab) => {
    // Check if the tab is valid
    if (tab && tab.url) {
        chrome.browsingData.remove({
            "origins": [tab.url]
        }, {
            "cache": true
        }, () => {
            // Send notification
            chrome.notifications.create({
                type: 'basic',
                iconUrl: 'Icons/Icon48.png',  // Ensure this path is correct
                title: 'Cache Cleared',
                message: 'The cache has been cleared and webpage refreshed.',
                priority: 2
            });

            // Reload the current tab
            chrome.tabs.reload(tab.id);
        });
    } else {
        console.error("No valid tab provided.");
    }
});
