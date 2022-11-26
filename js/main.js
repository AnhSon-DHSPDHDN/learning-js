function main() {
  const eleFormRegister = document.querySelector('.js-form-register')
  const eleBtnReset = document.querySelector('.js-btn-reset')
  const eleInputUsername = document.querySelector('#username')
  const eleInputPassword = document.querySelector('#password')
  const eleInputFirstName = document.querySelector('#firstName')
  const eleInputLastName = document.querySelector('#lastName')
  const eleContentTable = document.querySelector('.js-content-table')
  const listData = JSON.parse(localStorage.getItem("listData")) || [];

  function handleResetForm() {
    eleFormRegister.reset()
  }

  function handleResetError() {
    document.querySelector('.js-err-user-name').textContent = ""
  }

  function renderDataTable() {
    let result = ''

    listData.forEach((data, index) => {
      let computedGenderClass = ''
      switch (data?.gender) {
        case 'male':
          computedGenderClass = 'gender-male'
          break;
        case 'female':
          computedGenderClass = 'gender-female'
          break;
        default:
          computedGenderClass = 'gender-unknown'
          break;
      }

      result += `
        <tr class="${computedGenderClass}">
          <td>${data?.username}</td>
          <td>${data?.password}</td>
          <td>${data?.lastName}</td>
          <td>${data?.firstName}</td>
          <td>${data?.gender || ''}</td>
          <td>
            <button data-index="${index}">Xóa</button>
            <button>Sửa</button>
          </td>
        </tr>
      `
    })
    eleContentTable.innerHTML = result

    document.querySelectorAll(`[data-index]`).forEach((eleBtn) => {
      eleBtn.addEventListener('click', () => {
        const dataIndex = eleBtn.getAttribute("data-index")
        listData.splice(Number(dataIndex), 1)
        localStorage.setItem('listData', JSON.stringify(listData))
        renderDataTable()
        console.log('delete');
      })
    })
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

    listData.push(formValue)
    localStorage.setItem('listData', JSON.stringify(listData))
    renderDataTable()
    handleResetError()
    handleResetForm()
  })

  if (listData.length > 0) {
    renderDataTable()
  }
}

main()