// Initialize Firebase
var config = {
    apiKey: "AIzaSyDuRdHUDXUsOwAMl5-hClpnmz-QQr6GcFA",
    authDomain: "social-4ac51.firebaseapp.com",
    databaseURL: "https://social-4ac51.firebaseio.com",
    projectId: "social-4ac51",
    storageBucket: "social-4ac51.appspot.com",
    messagingSenderId: "463013193880"
};
firebase.initializeApp(config);


const provider = new firebase.auth.FacebookAuthProvider();
provider.addScope('user_location');
provider.addScope('public_profile');
provider.addScope('user_friends');
provider.addScope('email');
provider.addScope('rsvp_event');

function logIn() {

    firebase.auth().signInWithRedirect(provider).then(function (result) {
        var user = result.user;
        isLoggedIn(user);
    }).catch(function (error) {
        console.log(error);
    });
}

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        isLoggedIn(firebase.auth().currentUser);
    } else {
        isLoggedOut();
    }
});

function isLoggedIn(user) {
    $("#login-button").hide();
    $("#logged-in-view").show();
    $("#loggedIn").html("Logged in as: " + user.displayName);
}

function isLoggedOut() {
    $("#login-button").show();
    $("#logged-in-view").hide();
    $("#loggedIn").html("");
}

function logOut() {
    firebase.auth().signOut()
        .then(function () {
            window.location.reload();
        }, function (error) {
            console.log(error);
        });
}

//End Dependencies