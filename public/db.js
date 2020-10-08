// let db;
// //this page will create a db in local storage to store workout data 
// //if the user is offline, the data will be uploaded when user goes online
// const request = window.indexedDB.open("workout", 1);

// request.onupgradeneeded = function (event) {
//     db = event.target.result;
//     db.createObjectStore("exercise", { autoIncrement: true });
// };

// request.onsuccess = function (event) {
//     db = event.target.result;

//     if (navigator.onLine) {
//         checkDatabase();
//     }
// };

// request.onerror = function (event) {
//     console.log("Woops! " + event.target.errorCode);
// };

// function saveRecord(record) {
//     // create a transaction on the pending db with readwrite access
//     const transaction = db.transaction(["exercise"], "readwrite");

//     // access your pending object store
//     const store = transaction.objectStore("exercise");

//     // add record to your store with add method.
//     store.add(record);
// }
// function checkDatabase() {
//     const transaction = db.transaction(["exercise"], "readwrite");
//     const store = transaction.objectStore("exercise");
//     const getAll = store.getAll();

//     getAll.onsucess = function () {
//         if (getAll.result.length > 0) {
//             fetch("/api/transaction/bulk", {
//                 method: "POST",
//                 body: JSON.stringify(getAll.result),
//                 headers: {
//                     Accept: "application/json, text/plain, */*",
//                     "Content-Type": "application/json"
//                 }
//             })
//                 .then(response => response.json())
//                 .then(() => {
//                     const transaction = db.transaction(["exercise"], "readwrite");
//                     const store = transaction.objectStore("exercise");

//                     store.clear();
//                 });
//         }
//     };
// }

// // listen for app coming back online
// window.addEventListener("online", checkDatabase);