import {
  BaseLogger,
  ElasticLogger,
} from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";
//kullanıcının ekranı gibi düşünülebilir
//component demek örneğin hepsiburadada sepetin detayına gittin sepetin detayı gördün
//buna cartComponent deriz.Ürünün detayına gittin detailComponent buda.
console.log("User Component yüklendi");

let logger1 = ElasticLogger();
let userService = new UserService(logger1);

let user1 = new User(1, "Engin", "Demiroğ", "Ankara");
let user2 = new User(2, "İsmail", "Bozkurt", "Ankara");

userService.add(user1);
userService.add(user2);

console.log(userService.list());
console.log(userService.getById(2));

let customer = { id: 1, firstName: "Engin" };
//prototyping
//javaScripte sonradan bir değer eklenebilir.
customer.lastName = "Demiroğ";
console.log(customer.lastName);
