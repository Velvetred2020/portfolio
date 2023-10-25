function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function submitForm() {
  var name = document.getElementById('fname').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  if (!name || !email || !message) {
    alert('Please complete all fields before submitting.');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Simulate sending an email
  alert('Email sent successfully!\nName: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);

  location.reload();
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}