const timeButton = document.getElementById("showTimeButton")

const timeResult = document.getElementById('timeResult')

timeButton.addEventListener('click', () => {
    moment.locale('tr')
    const now = moment().format('')
    timeResult.textContent = `Şu an ki zaman ${now}`
    console.log(moment().format('LLLL')); // 'Freitag, 24. Juni 2016 01:42'
})