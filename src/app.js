console.log("Merhaba Kodlama.io")

//JS type safe değildir.
let dolarBugun = 9.30
let dolarDun = 9.20

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11 const ile tanımlanan değişkenin değeri bir daha değiştirilemez 
console.log(euroDun)

//camelCasing
//arrayin içine her tipte eleman tanımlanabilir  
let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi"]

console.log(konutKredileri)

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] + "</li>")
}
console.log("</ul>")