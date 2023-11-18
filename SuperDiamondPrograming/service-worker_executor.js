chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.requestType == "SuperDiamondPrograming Service-Worker Execution") {
        executeDynamicServiceWorker(message.code, (result) => {
            if (result !== null) {
                chrome.runtime.sendMessage({
                    requestType: "SuperDiamondPrograming Service-Worker Execution Return",
                    successful: true,
                    result: result
                });
            } else {
                chrome.runtime.sendMessage({
                    sender: "SuperDiamondPrograming Service-Worker Execution Return",
                    successful: false,
                    result: "ERROR"
                });
            }
        });
    }
});

function executeDynamicServiceWorker(scriptContent, callback) {
    const blob = new Blob([scriptContent], { type: 'application/javascript' });
    const blobURL = URL.createObjectURL(blob);
    navigator.serviceWorker.register(blobURL, { type: 'module' })
        .then(registration => {
            const channel = new MessageChannel();
            navigator.serviceWorker.controller.postMessage({ action: 'executeCode' }, [channel.port2]);
            channel.port1.onmessage = (event) => {
                const result = event.data.result;
                callback(result);
                registration.unregister().then(() => {
                    console.log("SuperDiamondPrograming: Sucessfully Executed Service Worker Script: ", scriptContent);
                });
            };
        })
        .catch(error => {
            console.error("SuperDiamondPrograming: Could Not Execute Service Worker Due to Error: ", error);
            callback(null);
        });
}

self.addEventListener('message', event => {
    if (event.data.action === 'executeCode') {
        const result = someFunction();
        const channel = new MessageChannel();
        event.source.postMessage({ action: 'codeExecuted', result: result }, [channel.port2]);
    }
});

function someFunction() {
    return "Hello from the service worker!";
}
