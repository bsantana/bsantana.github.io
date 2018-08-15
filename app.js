const config = {
    apiKey: "AIzaSyBTDi-VGDaR2XQ-6AgZoTGNsHfmls489c8",
    authDomain: "node-push-20cfd.firebaseapp.com",
    databaseURL: "https://node-push-20cfd.firebaseio.com",
    projectId: "node-push-20cfd",
    storageBucket: "node-push-20cfd.appspot.com",
    messagingSenderId: "388573187868"
};
firebase.initializeApp(config);

// Retrieve Firebase Messaging object.
const messaging = firebase.messaging();

// Add the public key generated from the console here.
messaging.usePublicVapidKey("BLzLRodL6QJW6SgclmJyzb9BafyT1GkYcO1UBPKYILutKjjQPT__HZCbqun2apBTENQ_jNfOoCZj5XCNfBHazmg");

messaging.requestPermission().then(function() {
    console.log('Notification permission granted.');
    // TODO(developer): Retrieve an Instance ID token for use with FCM.
    // ...
}).catch(function(err) {
    console.log('Unable to get permission to notify.', err);
});

// Callback fired if Instance ID token is updated.
messaging.onTokenRefresh(function() {
    messaging.getToken().then(function(refreshedToken) {
        console.log('Token refreshed.', refreshedToken);
        // Indicate that the new Instance ID token has not yet been sent to the
        // app server.
        setTokenSentToServer(false);
        // Send Instance ID token to app server.
        sendTokenToServer(refreshedToken);
        // ...
    }).catch(function(err) {
        console.log('Unable to retrieve refreshed token ', err);
        showToken('Unable to retrieve refreshed token ', err);
    });
});

// Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken().then(function(currentToken) {
    console.log('currentToken', currentToken)
    if (currentToken) {
    // sendTokenToServer(currentToken);
    // updateUIForPushEnabled(currentToken);
        console.log("if current token success")
    } else {
    // Show permission request.
    console.log('No Instance ID token available. Request permission to generate one.');
    // Show permission UI.
    // updateUIForPushPermissionRequired();
    // setTokenSentToServer(false);
    }
}).catch(function(err) {
    console.log('An error occurred while retrieving token. ', err);
    // showToken('Error retrieving Instance ID token. ', err);
    // setTokenSentToServer(false);
});