const dimensions = window.matchMedia('(min-width: 992px)')

const pricecardBreak = document.getElementById('pricecard-break')

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const submitBtn = document.getElementById('submit')
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email-address')
const password = document.getElementById('password')
const errorMessage = document.querySelectorAll('.error-message')
const errorIcon = document.querySelectorAll('.img-container')

dimensions.addEventListener('change', () => {
    pricecardBreak.setAttribute('data-visible', 'false')
})

if (dimensions.matches) {
    pricecardBreak.setAttribute('data-visible', 'false')
}
else {
    pricecardBreak.setAttribute('data-visible', 'true')
}

submitBtn.addEventListener('click', () => {
    let firstNameValue = firstName.value
    let lastNameValue = lastName.value
    let emailValue = email.value
    let passwordValue = password.value

    if (firstNameValue == "") {
        firstName.setAttribute('data-validated', 'false')
        errorIcon[0].setAttribute('data-validated', 'false')
        errorMessage[0].textContent = "First Name cannot be empty"
    }
    else {
        firstName.setAttribute('data-validated', 'true')
        errorIcon[0].setAttribute('data-validated', 'true')
        errorMessage[0].textContent = ""
    }

    if (lastNameValue == "") {
        lastName.setAttribute('data-validated', 'false')
        errorIcon[1].setAttribute('data-validated', 'false')
        errorMessage[1].textContent = "Last Name cannot be empty"
    }
    else {
        lastName.setAttribute('data-validated', 'true')
        errorIcon[1].setAttribute('data-validated', 'true')
        errorMessage[1].textContent = ""
    }

    if (emailRegex.test(emailValue)) {
        email.setAttribute('data-validated', 'true')
        errorIcon[2].setAttribute('data-validated', 'true')
        errorMessage[2].textContent = ""
    } else if (emailValue == "") {
        email.setAttribute('data-validated', 'false')
        errorIcon[2].setAttribute('data-validated', 'false')
        errorMessage[2].textContent = "Email cannot be empty"
    }
    else {
        email.setAttribute('data-validated', 'false')
        errorIcon[2].setAttribute('data-validated', 'false')
        errorMessage[2].textContent = "Looks like this is not an email"
    }

    if (passwordValue == "") {
        password.setAttribute('data-validated', 'false')
        errorIcon[3].setAttribute('data-validated', 'false')
        errorMessage[3].textContent = "Password cannot be empty"
    } else if (passwordValue.length < 8) {
        password.setAttribute('data-validated', 'false')
        errorIcon[3].setAttribute('data-validated', 'false')
        errorMessage[3].textContent = "Password must be 8 or more characters"
    } else {
        password.setAttribute('data-validated', 'true')
        errorIcon[3].setAttribute('data-validated', 'true')
        errorMessage[3].textContent = ""
    }

})