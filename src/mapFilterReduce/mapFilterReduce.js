let cart = [
    {id:1,productName:"Telefon",quantity:3,unitPrice:4000},
    {id:2,productName:"Bardak",quantity:2,unitPrice:30},
    {id:3,productName:"Kalem",quantity:1,unitPrice:20},
    {id:4,productName:"Şarj Cihazı",quantity:2,unitPrice:100},
    {id:5,productName:"Kitap",quantity:3,unitPrice:30},
    {id:6,productName:"Top",quantity:5,unitPrice:150}
]

function addToCart(sepet) {
    sepet.push({id:7,productName:"Monitör",quantity:1,unitPrice:20})
}

addToCart(cart)

console.log(cart)

//Map() kullanımı array dizisini iterator bi şekilde dolaşır

//cart  dizisinin her bir elemanını dolaşır ve takma alias bir isimler istenilen şekilde kullanılır.
//Map ile iterat edilen her bir eleman için verilen takma isimdir product
//map === foreach 
cart.map(product=>console.log(product.productName))


cart.map(product1=>{
    console.log(product1.productName + " " + product1.unitPrice * product1.quantity)
})

//Filter Fonksiyonu
//Genellikle aramalarda kullanılır.Bir data içerisinde bir şey aranırken kullanılır.
//Herbir nesne için filtreleme yapar.
//Yepyeni bir array oluşturu.
//filter === where
let quantityOver2 = cart.filter(product2=>product2.quantity>2)//şartı sağlayanlardan yeni array oluşturur.

console.log(quantityOver2)


//.reduce() => bir dizideki tüm öğelerin toplamını döndürmektir.
//ürünlerin toplam fiyatını hesaplaya bilmek içim 
let total = cart.reduce((acc,product3)=> acc+product3.unitPrice * product3.quantity,0)
//0 acc nin başlatıldığı değerdirç

console.log(total)


