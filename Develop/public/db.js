let db;

const request = indexedDB.open("workout", 1);

request.onupgradeneeded = function(event) {
    db = event.target.result;
    db.createObjectStore("exercise", { autoIncrement: true });
};

request.onsuccess = function(event) {
    db = event.target.result;

    if (navigator.onLine) {
        checkDatabase();
    }
};

request.onerro = function(event) {
    console.log("Woops! " + event.target.errorCode);
};

// listen for app coming back online
window.addEventListener("online", checkDatabase);