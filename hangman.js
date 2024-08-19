const kelimeler = ["JAVASCRIPT", "PROGRAMLAMA", "TASARIM", "DEVELOPER"];
const secilenKelime = kelimeler[Math.floor(Math.random() * kelimeler.length)];
let kelimeGorunumu = "_".repeat(secilenKelime.length).split("");
let kalanHak = 6;

const kelimeEl = document.getElementById('kelime');
const mesajEl = document.getElementById('mesaj');
const tahminEl = document.getElementById('tahmin');
const tahminButonEl = document.getElementById('tahminButon');
const hakEl = document.getElementById('hak');
const adamAsmacaEl = document.getElementById('adamAsmaca');

kelimeEl.textContent = kelimeGorunumu.join(" ");
hakEl.textContent = kalanHak;

tahminButonEl.addEventListener('click', () => {
    const tahmin = tahminEl.value.toUpperCase();
    tahminEl.value = "";

    if (tahmin && secilenKelime.includes(tahmin)) {
        for (let i = 0; i < secilenKelime.length; i++) {
            if (secilenKelime[i] === tahmin) {
                kelimeGorunumu[i] = tahmin;
            }
        }
    } else {
        kalanHak--;
        adamAsmacaEl.textContent += "O";
    }

    kelimeEl.textContent = kelimeGorunumu.join(" ");
    hakEl.textContent = kalanHak;

    if (!kelimeGorunumu.includes("_")) {
        mesajEl.textContent = "Tebrikler, Kazandınız!";
        tahminButonEl.disabled = true;
    } else if (kalanHak === 0) {
        mesajEl.textContent = `Kaybettiniz! Doğru kelime: ${secilenKelime}`;
        tahminButonEl.disabled = true;
    }
});
