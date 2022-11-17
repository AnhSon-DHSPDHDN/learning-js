function main() {
  const eleFormRegister = document.querySelector('.js-form-register')
  const eleBtnReset = document.querySelector('.js-btn-reset')
  const eleInputUsername = document.querySelector('#username')
  const eleInputPassword = document.querySelector('#password')
  const eleInputFirstName = document.querySelector('#firstName')
  const eleInputLastName = document.querySelector('#lastName')

  function handleResetForm() {
    eleFormRegister.reset()
  }

  eleBtnReset.addEventListener('click', (event) => {
    event.preventDefault()
    handleResetForm()
  })

  eleFormRegister.addEventListener('submit', event => {
    event.preventDefault()

    const formValue = {
      username: eleInputUsername.value,
      passwort: eleInputPassword.value,
      firstName: eleInputFirstName.value,
      lastName: eleInputLastName.value,
      gender: document.querySelector('[name="gender"]:checked')?.value
    }

    console.log(formValue);
  })
}

main()
