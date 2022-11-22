function main() {
  const eleResultCountDown = document.querySelector('.js-result-count-down')
  const newYearTime = new Date(2023, 0, 1)

  setInterval(() => {
    const currentTime = new Date()
    let timeRemaining = Math.floor((newYearTime.getTime() - currentTime.getTime()) / 1000)
    const dayRemain = Math.floor(timeRemaining / 60 / 60 / 24)

    // Tính lại thời gian còn lại
    timeRemaining = timeRemaining - dayRemain * 24 * 60 * 60
    const hourRemain = Math.floor(timeRemaining / 60 / 60)

    // Tính lại thời gian còn lại
    timeRemaining = timeRemaining - hourRemain * 60 * 60
    const minuteRemain = Math.floor(timeRemaining / 60)

    // Tính lại thời gian còn lại
    timeRemaining = timeRemaining - minuteRemain * 60
    const secondRemain = timeRemaining

    eleResultCountDown.textContent = `
      Còn ${dayRemain} ngày, ${hourRemain} giờ, ${minuteRemain} phút, ${secondRemain} giây là ăn tết!
    `
  }, 1000)
}

main()
