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

var provider = new firebase.auth.FacebookAuthProvider();
/*provider.addScope('user_location');
provider.addScope('public_profile');
provider.addScope('user_friends');
provider.addScope('email');
provider.addScope('rsvp_event');
*/
function fbLogin() {
    firebase.auth().signInWithRedirect(provider).then(function (result) {
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        console.log(user);
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
    });
}