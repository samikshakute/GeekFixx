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

// function eyeCare() {
//   const slider = document.getElementById("myRange3");
//   slider.addEventListener("input", function () {
//     const minutes = parseInt(slider.value);
//     setTimeout(function () {
//       alert("Time's up!");
//     }, minutes * 60000);
//   });
// }

//Display Minute Values
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

function setEyeReminder() {
  const eyeToggle = document.getElementById("eyeToggle");
  const eyeSliderValue = document.getElementById("slider-value3").textContent;
  if (eyeToggle.checked) {
    setTimeout(() => {
      alert("Look away");
    }, eyeSliderValue * 60 * 1000);
  }
}

function checkBatteryStatus() {
  // Get the BatteryManager object
  navigator.getBattery().then(function (battery) {
    // Check if the battery is charging
    if (!battery.charging && document.querySelector("#chargeToggle").checked) {
      alert("Charger is not plugged in.");
    }

    // Get the slider value
    const sliderValue = document.querySelector("#myRange5").value;

    // Check if the battery is charging and the level is greater than or equal to the slider value
    if (battery.charging && battery.level * 100 >= sliderValue) {
      alert(
        "Battery charged up to the selected value. Please unplug the charger."
      );
    }
  });
}