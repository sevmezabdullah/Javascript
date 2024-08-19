const kelimeler = ["JAVASCRIPT", "RUST", "PYTHON", "DART", "TYPESCRIPT", "PROGRAMLAMA", "GOIT"];

let kalanHak = 6;



const secilenKelime = kelimeler[Math.floor(Math.random() * kelimeler.length)];

let kelimeGorunumu = "_".repeat(secilenKelime.length).split("");

const kelime1 = document.getElementById("kelime");
const mesaj1 = document.getElementById("mesaj");
const tahmin1 = document.getElementById("tahmin");
const tahminButton1 = document.getElementById("tahminButton");
const hak1 = document.getElementById("hak");
const adamAsmaca1 = document.getElementById("adamAsmaca");

kelime1.textContent = kelimeGorunumu.join("  ");
hak1.textContent = kalanHak;


tahminButton1.addEventListener("click", () => {
    const tahmin = tahmin1.value.toUpperCase();
    tahmin1.value = "";
    if (tahmin && secilenKelime.includes(tahmin)) {

        for (let i = 0; i < secilenKelime.length; i++) {
            if (secilenKelime[i] === tahmin) {
                kelimeGorunumu[i] = tahmin;
                console.log("Harfler Eşleşti", tahmin)
            }
        }



    } else {
        kalanHak--;
        adamAsmaca1.textContent += "O"
    }


    if (!kelimeGorunumu.includes("_")) {
        mesaj1.textContent = "TEBRIKLER KAZANDINIZ";
        tahminButton1.disabled = true;
    } else if (kalanHak === 0) {
        mesaj1.textContent = "KAYBETTİNİZ";
        tahminButton1.disabled = true;
    }
    kelime1.textContent = kelimeGorunumu.join(" ");
    hak1.textContent = kalanHak;


});