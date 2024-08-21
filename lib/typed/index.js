const startTypingButton = document.getElementById("startTypingButton")


startTypingButton.addEventListener('click', () => {
    const options = {
        strings: ["Merhaba!", "Javascript çalışmaya devam"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    }

    new Typed("#typedText", options)
})