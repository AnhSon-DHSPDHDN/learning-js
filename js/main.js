
// (function () {
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'GET'
//   }).then((response) => {
//     response.json().then(data => {
//       console.log('THANH CONG: ', data);
//     })
//   }).catch((error) => {
//     console.log('THAT BAI', error);
//   }) // Nếu k điền method => GET
//   // Xử lí = promise => dễ xảy ra hiện tượng CallBack hell

//   console.log('FUNCTION CHẠY XONG');
// })()

(async function () {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET',
    })

    if (response.status === 404) {
      throw new Error('asdasd')
    }

    const data = await response.json()
    console.log(data);
    console.log('FUNCTION CHẠY XONG');
  } catch (error) {
    console.log(error);
  }
})() // Khai báo bằng async => Khi return ở trong function => Promise