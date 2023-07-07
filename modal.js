function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
const modalClose = document.querySelector(".close");

modalClose.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
}

//add Regex for check user input and display error message



// function for check
function checkInput(input, regex, text) {
  if (!input.value || !regex.test(input.value)) {

    displayError(input, text);
    return true;
  } else {
    hideError(input);
    return false;
  }
}

// check if one radio selected
function getSelectedOption(input, text) {
  let selected = document.querySelector('input[name=location]:checked');
  if (selected) {
    hideError(input);
    return true;
  } else {
    displayError(input, text);
    return false;
  }
}

// check terms of use was checked
function getUserTerms(input, text) {
  let check = document.querySelector('input[id=checkbox1]:checked');
  if (check) {
    hideError(input);
    return true;
  } else {
    displayError(input, text);
    return false;
  }
}


// function for display error message
function displayError(input, text) {

  let errorPart = input.closest(".formData");

  // clean all error message
  let existingErrorMessages = errorPart.querySelectorAll(".errorMessage");
  existingErrorMessages.forEach((errorMessage) => {
    errorMessage.remove();
  });

  // add error message
  let newErrorMsg = document.createElement("p");
  newErrorMsg.classList.add("errorMessage");
  newErrorMsg.textContent = text;

  errorPart.appendChild(newErrorMsg);
}

// function for hide error message
function hideError(input) {
  let errorPart = input.closest(".formData");
  let errorPartRemove = errorPart.querySelector(".errorMessage");
  if (errorPartRemove != null) {
    errorPartRemove.remove();
  }
}

// Définition des variables pour le formulaire
//Sélection de la valeur de l'input
let userFirstName = document.getElementById("first");
let userLastName = document.getElementById("last");
let userEmail = document.getElementById("email");
let userQuantity = document.getElementById("quantity");
let userBirthdate = document.getElementById("birthdate");
let userLocation = document.getElementById("location1");
let userTerms = document.getElementById("checkbox1");

// regex 
let regexFirstName = /^([A-Za-z]{2,20})?([-]{0,1})?([A-Za-z]{2,20})$/;
let regexLastName = /^[A-Za-z]{3,20}$/;
let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let regexQuantity = /[0-9]/;

// error message text 
let errorName = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
let errorOption = "Vous devez choisir une option.";
let errorTerms = "Vous devez vérifier que vous acceptez les termes et conditions.";
let errorBirthdate = "Vous devez entrer votre date de naissance.";
let errorEmail = "Veuillez entrer une adresse mail valide.";
let errorQuantity = "Veuillez saisir un nombre";

// submit button

const submitBtn = document.querySelector(".btn-submit");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  checkInput(userFirstName, regexFirstName, errorName);
  checkInput(userLastName, regexLastName, errorName);
  checkInput(userEmail, regexEmail, errorEmail);
  checkInput(userBirthdate, regexQuantity, errorBirthdate);
  checkInput(userQuantity, regexQuantity, errorQuantity);
  getSelectedOption(userLocation, errorOption);
  getUserTerms(userTerms, errorTerms);

  if (
    !checkInput(userFirstName, regexFirstName, errorName)
    && !checkInput(userLastName, regexLastName, errorName)
    && !checkInput(userEmail, regexEmail, errorEmail)
    && !checkInput(userBirthdate, regexQuantity, errorBirthdate)
    && !checkInput(userQuantity, regexQuantity, errorQuantity)
    && getSelectedOption(userLocation, errorOption)
    && getUserTerms(userTerms, errorTerms)
  ) {
    alert("inscrit");
  }
  else {
    console.warn("pas inscrit")
  }
}
);



