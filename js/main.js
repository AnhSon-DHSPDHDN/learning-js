function main() {
  const age = prompt('Xin chào. Đây là máy thần kì. \nHãy nhập tuổi của bạn!', '')
  const eleMainContent = document.querySelector('.main__content')

  if (Number(age) < 0) {
    eleMainContent.textContent = `Bạn đừng có mà mồm điêu đi đẻ đi!!!!!!`
    eleMainContent.style.color = 'red'
    return
  }

  if (Number(age) > 150) {
    eleMainContent.textContent = `Bạn chưa xanh cỏ à?`
    eleMainContent.style.color = 'green'
    return
  }

  if (Number(age) > 100) {
    eleMainContent.textContent = `Bạn hơi bị khoẻ đấy. Tuổi của bạn là: ${age}`
    return
  }

  eleMainContent.textContent = `Tuổi của bạn là: ${age}`
}

main()
