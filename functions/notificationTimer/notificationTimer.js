function solution(sendNotification) {
    const timeouts = {};
    let messages = {};
    let activeTimeouts = 0;

    const addTimeout = (chatName, timeoutMs) => {
        const onMessage = (message) => {
            messages[chatName] = message;

            if (!timeouts[chatName]) {
                timeouts[chatName] = setTimeout(() => {
                    activeTimeouts--;
                    if (activeTimeouts === 0) {
                        sendNotification({ ...messages });
                        messages = {};
                    }
                }, timeoutMs);
                activeTimeouts++;
            } else {
                clearTimeout(timeouts[chatName]);
                timeouts[chatName] = setTimeout(() => {
                    activeTimeouts--;
                    if (activeTimeouts === 0) {
                        sendNotification({ ...messages });
                        messages = {};
                    }
                }, timeoutMs);
            }
        };
        return onMessage;
    };

    const removeTimeout = (chatName) => {
        if (timeouts[chatName]) {
            clearTimeout(timeouts[chatName]);
            activeTimeouts--;
            delete timeouts[chatName];
        }
    };

    return [addTimeout, removeTimeout];
}

solution();

