/*class Customer{
    constructor(id,customerNumber){
       this.id=id  //instance sin id eşittir parametre olarak gelen idye 
       this.customerNumber= customerNumber
    }
}

let customer = new Customer(1,"12345"); //customer constructoruna parametre göndermezsek bile undifined olur
//prototyping
customer.name = "Murat KurtBoğan" //bir nesneye başka bir özellik eklenebilir.İnstance yapılan prototypingtir.
console.log(customer.id)
console.log(customer.customerNumber)
console.log(customer.name)

Customer.bisey="Bi şey"  // static bir prototyping te yapılabilir.Class a yapılan bir prototyping tir.

console.log(Customer.bisey)



//Javada ki gibi extends ile kalıtım alınır.
class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber) // kalıtım alınan sınıf içerisindeki değişkene gönderiyor.
        this.firstName=firstName
    }
}

class CorpororateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName=companyName
    }
}
*/

let cart = [  //içinde objeler tutun array
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:2, unitPrice:30},
    {id:3, productName:"Kalem", quantity:1, unitPrice:20},
    {id:4, productName:"Şarj Cihazı", quantity:2, unitPrice:100},
    {id:5, productName:"Kitap", quantity:3, unitPrice:30},
    {id:6, productName:"Pot", quantity:5, unitPrice:150},
]

console.log("<ul>")
cart.map(product=>{console.log("<li>"+product.productName + " : " + product.unitPrice * product.quantity+"</li>")})
console.log("</ul>")

let total = cart.reduce((acc,product)=>acc+ product.unitPrice * product.quantity,0)
//Reduce nispeten daha az kullanılan bir fonksiyondur.Akümülatör görevi görüyor.Örneğin hepsi burada sitesinde
//sepetin totali gösterilmek isteniyor cart ise sepete eklenen elemanlar olsun her bir product için toplamı 
//hesaplanacağı için her bir acc ye product unitprice ve product quantity çarpımından çıkan sonucu ekler.0 ise 
//başlangıç değeridir.
console.log(total)

let quantityOver2 = cart.filter(product=>product.quantity>2) //filter elimizdeki arrayi filtrelemeye yarar
//yepyeni bir array ortaya çıkarıyor.Angular,React statement management denen bir olay mevcut bir data
//değiştiğinde ekran birden şekilleniyor.Ekranı yeniden render ediyoruz.Render edilmesi için referansın
//değişmesi gerekiyor.Referans tipse.Filter yeni bir array oluşturuyor.Referansı değiştirdiğin anda ekran yeniden
//render ediliyor.Filter her bir product için quantitysi 2 den büyükse o elemanı product ı bir arraya atıp
//bize verir.
                                                        
console.log(quantityOver2) 

let carTotal2 = products
                .filter(p=>p.unitPrice>13000)
                .map(p=>{
                    p.unitPrice=p.unitPrice*1.18
                    return p
                })
                .reduce((acc,p)=>acc+p.unitPrice,0)
console.log(carTotal2)
//filter  filtreleyip bir array oluşturdu.Bir data apiden geldi onu filtreledin sonra mapi yeni objeler oluşturmak
//için kullanılabiliyor.Sonra bir map işlemi yapılmış.Map de o an oluşturmuş olanı return etmiş.Filtreledi ,her bir
//ürün için kdv hesapladı sonra reduce işlemi uygulandı.                

function addToCart(sepet) {
    sepet.push({id:7, productName:"Ruhsat", quantity:1, unitPrice:20})
}


addToCart(cart)

console.log(cart)

let sayi = 10

function sayiTopla(number) {
    number += 1
}
sayiTopla(sayi)
console.log(sayi)