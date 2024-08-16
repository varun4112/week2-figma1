// fUNCTION TO OPEN AND CLOSE ACCORDION

// Accordion Functionality with Image Rotation
document.addEventListener("DOMContentLoaded", function () {
  var acc = document.getElementsByClassName("accordion");

  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");

      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }

      // Image Rotation
      var img = this.querySelector(".rotateImage");
      if (img) {
        if (img.style.transform === "rotate(45deg)") {
          img.style.transform = "rotate(0deg)";
        } else {
          img.style.transform = "rotate(45deg)";
        }
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const sidebar = document.querySelector(".side-bar");
  const close = document.getElementById("closeButtonIcon");
  const BookACar = document.getElementById("BookACar");
  const bookTabs = document.getElementById("bookTabs");

  const sameAsPickUp = document.getElementById("sameAsPickUp");
  const differentPickup = document.getElementById("differentPickup");
  const dropOffLocation = document.getElementById("dropOffLocation");

  burger.addEventListener("click", () => {
    console.log("clicked");
    sidebar.classList.add("active");
  });

  close.addEventListener("click", () => {
    console.log("clicked");
    sidebar.classList.remove("active");
  });

  BookACar.addEventListener("click", () => {
    console.log("clicked");
    bookTabs.classList.toggle("active");
  });

  sameAsPickUp.addEventListener("click", () => {
    console.log("clicked");
    dropOffLocation.classList.toggle("inactive");
  });

  differentPickup.addEventListener("click", () => {
    console.log("clicked");
    dropOffLocation.classList.toggle("inactive");
  });
});

//FORM VALIDATION

//NAME VALIDATION
function validateName() {
  const name = document.getElementById("name").value.trim();
  const nameError = document.getElementById("nameError");

  if (name === "") {
    nameError.textContent = "Name is required";
    nameError.style.display = "block";
    return false;
  } else {
    nameError.style.display = "none";
    return true;
  }
}

// Email
function validateEmail() {
  const email = document.getElementById("email").value.trim();
  const emailError = document.getElementById("emailError");
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailPattern.test(email)) {
    emailError.textContent = "Enter a valid email address";
    emailError.style.display = "block";
    return false;
  } else {
    emailError.style.display = "none";
    return true;
  }
}

document
  .getElementById("subscribeButton")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Validate both fields
    const isNameValid = validateName();
    const isEmailValid = validateEmail();

    // If both are valid, proceed with form submission
    if (isNameValid && isEmailValid) {
      alert("Form submitted successfully!");
      // Handle form submission here
    }
  });
