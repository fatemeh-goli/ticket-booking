
let selectCountry = document.getElementById("select-country");
let selectCity = document.getElementById("select-city");

let cityOfTheCountry = {
    Iran: ["Tehran", "Mashhad", "Ilam", "yazd", "Tabriz"],
    Canada: ["Victoria", "Vancouver", "White Rock"],
    Qatar: ["Doha", "Al-Khor", "Fuwayrit", "Al-Rayyan"],
    Russia: ["Saint Petersburg", "Murmansk", "Kazan", "Petrozavodsk", "Irkutsk"],
};

selectCountry.addEventListener("change", function () {
    let valueCountry = selectCountry.value;
    let cities = cityOfTheCountry[valueCountry];

    updateCities(cities);
});

function updateCities(cities) {
    let optionCity = selectCity.querySelectorAll("option");

    optionCity.forEach(function (option) {
        option.remove();
    });

    cities.forEach(function (city) {
        let cityOption = document.createElement("option");
        cityOption.textContent = city;
        selectCity.append(cityOption);
    });
}

let valueCountry = selectCountry.value;
let cities = cityOfTheCountry[valueCountry];

updateCities(cities);

// Form elements
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let phoneNumber = document.getElementById("phone-number");
let email = document.getElementById("email");

let buttonTicketBooking = document.getElementById("ticket-booking");

let firstNameMessage = document.getElementById("first-name-error");
let lastNameMessage = document.getElementById("last-name-error");
let phoneNumberMessage = document.getElementById("phone-number-error");
let emailMessage = document.getElementById("email-error");

let messageSuccess = document.getElementById("message-success");
let closeMessageSuccess = document.getElementById("close-message-success");

buttonTicketBooking.addEventListener("click", function () {

    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value;
    let phoneNumberValue = phoneNumber.value;
    let emailValue = email.value;

    firstNameMessage.textContent = "";
    firstNameMessage.style.display = "none";

    lastNameMessage.textContent = "";
    lastNameMessage.style.display = "none";

    phoneNumberMessage.textContent = "";
    phoneNumberMessage.style.display = "none";

    emailMessage.textContent = "";
    emailMessage.style.display = "none";

    if (firstNameValue === "") {
        firstNameMessage.textContent = "Name not entered";
        firstNameMessage.style.display = "block";

    } else if (lastNameValue === "") {
        lastNameMessage.textContent = "Last name not entered";
        lastNameMessage.style.display = "block";

    } else if (
        phoneNumberValue === "" ||
        isNaN(phoneNumberValue) ||
        phoneNumberValue.length !== 11
    ) {
        phoneNumberMessage.textContent = "Phone number not entered";
        phoneNumberMessage.style.display = "block";

    } else if (emailValue === "") {
        emailMessage.textContent = "Email has not been entered.";
        emailMessage.style.display = "block";

    } else {
        messageSuccess.style.display = "block";
    }
});

closeMessageSuccess.addEventListener("click", function () {
    messageSuccess.style.display = "none";
});
