// Wait for the DOM to be loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Get the user info from local storage
  const userData = JSON.parse(localStorage.getItem("userData"));

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
    // Remove the user info from local storage and redirect to the login page
    localStorage.removeItem("userData");
    window.location.replace("form.html");
  });
});

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
