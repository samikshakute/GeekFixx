document.addEventListener("DOMContentLoaded", function () {
  // Get the form and its elements
  const form = document.getElementById("login-form");
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const genderInput = document.querySelectorAll('input[name="gender"]');
  const occupationInput = document.getElementById("occupation");

  // Check if user data already exists in cookies
  const cookies = document.cookie.split("; ");
  let userData;
  cookies.forEach((cookie) => {
    if (cookie.startsWith("userData=")) {
      userData = JSON.parse(cookie.substring("userData=".length));
    }
  });

  if (userData) {
    // Redirect the user to the dashboard page
    window.location.href = "dashboard.html";
    return;
  }

  // Add submit event listener to the form
  form.addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the input values and store them in an object
    const userData = {
      name: nameInput.value,
      age: ageInput.value,
      gender: "",
      occupation: occupationInput.value
    };

    // Find which radio button is selected and add its value to the object
    for (let i = 0; i < genderInput.length; i++) {
      if (genderInput[i].checked) {
        userData.gender = genderInput[i].value;
        break;
      }
    }

    // Store the user data in a cookie
    const cookieValue = JSON.stringify(userData);
    document.cookie = `userData=${cookieValue}; max-age=3600`;

    // Redirect the user to the dashboard page
    window.location.href = "dashboard.html";
  });
});
