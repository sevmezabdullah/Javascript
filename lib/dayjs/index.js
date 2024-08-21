const calculateDaysButton = document.getElementById('calculateDaysButton')
const dayResult = document.getElementById('daysResult')




calculateDaysButton.addEventListener('click', () => {
    const startDate = dayjs("2023-01-01")
    const today = dayjs()
    const daysPassed = today.diff(startDate, 'day')
    dayResult.textContent = `1 Ocak 2023 ile bu gün arasında ${daysPassed} gün var.`
})