function main() {
  const eleFormRegister = document.querySelector('.js-form-register')
  const eleBtnReset = document.querySelector('.js-btn-reset')
  const eleInputUsername = document.querySelector('#username')
  const eleInputPassword = document.querySelector('#password')
  const eleInputFirstName = document.querySelector('#firstName')
  const eleInputLastName = document.querySelector('#lastName')
  const eleContentResult = document.querySelector('.js-content-result')

  function handleResetForm() {
    eleFormRegister.reset()
  }

  function handleResetError() {
    document.querySelector('.js-err-user-name').textContent = ""
  }

  const renderContentResult = (formValue) => {
    console.log('renderContent', formValue)
    handleResetError()

    eleContentResult.innerHTML = `
      <p>Username is: ${formValue.username}</p>
      <p>Password is: ${formValue.password}</p>
      <p>FirstName is: ${formValue.firstName}</p>
      <p>Last Name is: ${formValue.lastName}</p>
      <p>Gender is: ${formValue.gender || 'Không rõ'}</p>
    `
  }

  eleBtnReset.addEventListener('click', (event) => {
    event.preventDefault()
    handleResetForm()
  })

  eleFormRegister.addEventListener('submit', event => {
    event.preventDefault()

    const formValue = {
      username: eleInputUsername.value,
      password: eleInputPassword.value,
      firstName: eleInputFirstName.value,
      lastName: eleInputLastName.value,
      gender: document.querySelector('[name="gender"]:checked')?.value
    }

    if (!formValue.username) {
      document.querySelector('.js-err-user-name').textContent = "Vui lòng nhập username!!!"
      return
    }

    if (!formValue.password) {
      alert('Vui lòng nhập password!!!')
      return
    }

    renderContentResult(formValue)
    handleResetForm()
  })
}

main()
