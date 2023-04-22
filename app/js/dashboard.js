// Wait for the DOM to be loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Get the user info from cookies
  const userData = JSON.parse(getCookie("userData"));

  // If user info exists, update the dashboard with it
  if (userData) {
    const name = userData.name;
    const age = userData.age;
    const gender = userData.gender;
    const occupation = userData.occupation;

    const nameSpan = document.getElementById("name");
    const ageSpan = document.getElementById("age");
    const genderSpan = document.getElementById("gender");
    const occupationSpan = document.getElementById("occupation");

    nameSpan.innerText = name;
    ageSpan.innerText = age;
    genderSpan.innerText = gender;
    occupationSpan.innerText = occupation;
  } else {
    // If user info does not exist, redirect to the login page
    window.location.replace("form.html");
  }

  // Add click event listener to the logout button
  const logoutButton = document.getElementById("logout");
  logoutButton.addEventListener("click", function () {
    // Remove the user info from cookies and redirect to the login page
    setCookie("userData", "", 0); // set cookie to expire immediately
    window.location.replace("form.html");
  });
});

// Function to set a cookie
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie
function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) == 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
}

// Function to erase a cookie
function eraseCookie(name) {
  document.cookie = name + "=; Max-Age=-99999999;";
}



function changeImage1() {
  var image = document.getElementById("toggle1");
  if (image.src.match("/images/xicon.png")) {
    image.src = "/images/tickicon.png";
  } else {
    image.src = "/images/xicon.png";
  }
}

function changeImage2() {
  var image = document.getElementById("toggle2");
  if (image.src.match("/images/xicon.png")) {
    image.src = "/images/tickicon.png";
  } else {
    image.src = "/images/xicon.png";
  }
}

function changeImage3() {
  var image = document.getElementById("toggle3");
  if (image.src.match("/images/xicon.png")) {
    image.src = "/images/tickicon.png";
  } else {
    image.src = "/images/xicon.png";
  }
}

function changeImage4() {
  var image = document.getElementById("toggle4");
  if (image.src.match("/images/xicon.png")) {
    image.src = "/images/tickicon.png";
  } else {
    image.src = "/images/xicon.png";
  }
}

function changeImage5() {
  var image = document.getElementById("toggle5");
  if (image.src.match("/images/xicon.png")) {
    image.src = "/images/tickicon.png";
  } else {
    image.src = "/images/xicon.png";
  }
}

function updateValue1() {
  var slider = document.getElementById("myRange1");
  var sliderValue = document.getElementById("slider-value1");
  sliderValue.innerHTML = slider.value;
}

function updateValue2() {
  var slider = document.getElementById("myRange2");
  var sliderValue = document.getElementById("slider-value2");
  sliderValue.innerHTML = slider.value;
}

function updateValue3() {
  var slider = document.getElementById("myRange3");
  var sliderValue = document.getElementById("slider-value3");
  sliderValue.innerHTML = slider.value;
}
function updateValue4() {
  var slider = document.getElementById("myRange4");
  var sliderValue = document.getElementById("slider-value4");
  sliderValue.innerHTML = slider.value;
}
function updateValue5() {
  var slider = document.getElementById("myRange5");
  var sliderValue = document.getElementById("slider-value5");
  sliderValue.innerHTML = slider.value;
}
