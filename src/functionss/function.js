function addToCart(productName="elma") {
    console.log("Sepete Eklendi : "+ productName)
    
}

addToCart()
addToCart("Yumurta")
addToCart(15)

let sayHello =()=>{// sayHello () sen bir fonksiyonsun => ve 
                  //çalıştıracağın kod bloğuda budur {} eğer tek satırsa direk
                  //return ifadesi olarakta verilebilir süslü parantez yazılmadan

    console.log("hello World")
}
sayHello()

let sayHello2= function () {
    console.log("Hello World2")    
}

sayHello2();

function addToCart2(product) {
    console.log(product.productName+" "+product.unitPrice+" "+product.quantity)
}

let product1 = {productName:"elma",unitPrice:10,quantity:5}

addToCart2(product1)

function addToCart4(x) {
    console.log(products)
    
}
let products = [
    {productName:"elma",unitPrice:10,quantity:5},
    {productName:"armut",unitPrice:9,quantity:6},
    {productName:"muz",unitPrice:8,quantity:7}
]

addToCart4(products)

function add(...numbers) {//...numbers noktalar rest(toparlar) operatorüdür.
                        //... rest operatoru gelen parametreleri [] şeklinde array yapar.
                        //rest fonksiyon içerisinde her zaman sona bırakılır.
                        //add(bisey,...numbers) benzeri şekilde
    let total=0
    for (let i = 0; i< numbers.length; i++){
        //console.log(numbers[i])
        total = total + numbers[i]
    }
    console.log(total)
}
add(20,30)
add(20,30,40)
add(20,30,40,50)
add(20,30,40,50,60)


console.log(Math.max(10,20,30,100,50,600))//max içerisindeki değerler ...values şekline
                                        //array hale döndürür.

let numbers5 = [600,500,100,30,20,10]//spread ayrıştırır
console.log(...numbers5)

/*let [icAnadolu,marmara] = [ //her bir obje değerini dizi içerisindeki değişkenlere atıyor.Bu işleme Destructuring 
    {name:"İç Anadolu",population : "20M"},//işlemi denir.
    {name:"Marmara",population : "30M"},
    {name:"Karadeniz",population : "10M"},
]

console.log(icAnadolu)
console.log(marmara)*/



let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri,karadenizSehirleri]] = [ //her bir obje değerini dizi içerisindeki değişkenlere atıyor.Bu işleme Destructuring 
    {name:"İç Anadolu",population : "20M"},//işlemi denir.
    {name:"Marmara",population : "30M"},
    {name:"Karadeniz",population : "10M"},
    [
        ["Konya","Ankara"],
        ["Bursa","İstanbul"],
        ["Trabzon","Sinop"]
    ]
]

console.log(icAnadoluSehirleri)

let productName,unitPrice,quantity

let ({productName,unitPrice,quantity}={
    productName : "Elma",
    unitPrice:10,
    quantity:5
}) //() parantezler süslü parantezlerden dolayı kodun hatasını engellemek için yazıldı.
console.log(productName)

 
