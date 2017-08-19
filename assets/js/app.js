var provider = new firebase.auth.FacebookAuthProvider();
provider.addScope('user_location');
provider.addScope('public_profile');
provider.addScope('user_friends');
provider.addScope('email');
provider.addScope('rsvp_event');


provider.setCustomParameters({
    'display': 'popup'
});

function fbLogin() {
    firebase.auth().signInWithPopup(provider).then(function (result) {
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