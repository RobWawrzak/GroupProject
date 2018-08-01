// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCDl5786d2qbt1J1QsOdhYVLM7o19JRoGA',
  authDomain: 'gpa-d-7c696.firebaseapp.com',
  databaseURL: 'https://gpa-d-7c696.firebaseio.com',
  projectId: 'gpa-d-7c696',
  storageBucket: 'gpa-d-7c696.appspot.com',
  messagingSenderId: '718824836495'
};
firebase.initializeApp(config);

// Create a variable to reference the database.
var database = firebase.database();

// Initial values
var firstName = '';
var lastName = '';
var address = '';
var city = '';
var province = '';
var country = '';
var postalcode = '';
var email = '';
var password = '';

// Create new User
$('#signUpSubmit').on('click', function(event) {
  event.preventDefault();

  // Capture user inputs and store them into variables
  var firstName = $('#inputFName')
    .val()
    .trim();
  var lastName = $('#inputLName')
    .val()
    .trim();
  var address = $('#inputAddress')
    .val()
    .trim();
  var city = $('#inputCity')
    .val()
    .trim();
  var province = $('#inputProvince')
    .val()
    .trim();
  var country = $('#inputCountry')
    .val()
    .trim();
  var postalcode = $('#inputPC')
    .val()
    .trim();
  var email = $('#inputEmail4')
    .val()
    .trim();
  var password = $('#inputPassword4')
    .val()
    .trim();

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function(user) {
      console.log('uid', user.uid);
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });

  var newUser = {
    firstName: firstName,
    lastName: lastName,
    address: address,
    city: city,
    province: province,
    country: country,
    postalcode: postalcode,
    email: email,
    password: password
  };

  console.log(newUser);

  database.ref('users').push(newUser);

  //dataRef.ref().on('child added', function(childSnapShot) {}),
  //function(errorObject) {
  //console.log('Errors handled: ' + errorObject.code);
  //};

  // Console log each of the user inputs to confirm we are receiving them
  // console.log(childSnapShot.val().firstName);
  //console.log(childSnapShot.val().lastName);
  //console.log(childSnapShot.val().address);
  //console.log(childSnapShot.val().city);
  //console.log(childSnapShot.val().province);
  //console.log(childSnapShot.val().postalcode);
  //console.log(childSnapShot.val().email);
  //console.log(childSnapShot.val().password);

  // *DP* Be very careful here, we are all reading and writing to session storage, by including this line you might be deleting someone elses variables
  // *DP*  Instead use sessionStorage.removeItem("name_of_variable") to delete own keys relevant to you
  // Clear sessionStorage
  //sessionStorage.clear();

  // Anyone can use firebase to get this information, It makes it easier for the person who needs the information, but I don't think it's necessary.
  // Store all content into sessionStorage
  sessionStorage.setItem('first name', firstName);
  sessionStorage.setItem('last name', lastName);
  sessionStorage.setItem('address', address);
  sessionStorage.setItem('city', city);
  sessionStorage.setItem('province', province);
  sessionStorage.setItem('country', country);
  sessionStorage.setItem('postal code', postalcode);
  sessionStorage.setItem('email', email);
  sessionStorage.setItem('password', password);
});

// Sign In
$('#signInSubmit').on('click', function(event) {
  event.preventDefault();
  var email = $('#signInEmail').val();
  var password = $('#signInPassword').val();
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function(user) {
      console.log('uid', user.uid);
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});

// FirebaseUI config.

// !!!!!!!!!!IMPORTANT - All pages will need to reference this code to determine if the user is logged in or not!!!!!!!!!!!!
// Listener on the Firebase user object.
/* firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var uiConfig = {
      signInSuccessUrl:
        'https://duke6am.github.io/GoogleSignin/SigninSuccess.html'
    };
    // User is signed in.
    var firstName = user.firstName;
    var lastName = user.lastName;
    var email = user.email;
    var address = user.address;
    var city = user.city;
    var province = user.Province;
    var country = user.country;
    var postalCode = user.postalCode;
    var createDate = user.createDate;
    var uid = user.UID;

    //var emailVerified = user.emailVerified;
    //var photoURL = user.photoURL;
    //var isAnonymous = user.isAnonymous;
    //var uid = user.uid;
    //var providerData = user.providerData;
    // ...
    console.log(
      'First Name: ' + user.firstName,
      'Last Name: ' + user.lastName,
      'Email: ' + user.email,
      'Address: ' + user.address,
      'City: ' + user.city,
      'Province: ' + user.province,
      'Country: ' + user.country,
      'Postal Code: ' + user.postalCode,
      'Create Date: ' + user.createDate,
      'User ID: + ' + user.UID
      //'\nEmail Verified?: ' + user.emailVerified,
      //'\nPhoto URL: ' + user.photoURL,
      //'\nIs Anonymous: ' + user.isAnonymous,
      //'\nUID: ' + user.uid,
      //'\nProvider Data: ' + user.providerData
    );
  } else {
    console.log('epic fail');
  } */

/*   var db = firebase.database();

  // For this line to work, there MUST be a matching users entry in the Firebase database. I've created 1 user as an example. Sign-In using abc@abc.com with password 123456.
  db.ref('users')
    .orderByChild('UID')
    .equalTo(user.uid)
    .once('value')
    .then(function(snapshot) {
      console.log(snapshot.val());
    }); 
});*/
