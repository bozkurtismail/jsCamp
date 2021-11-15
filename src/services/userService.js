//export dışarıdan import edilebileceği anlamına geliyor
//default ise javaScript filebase(dosya bazlı) olduğu için userService import edildiğinde
//default olarak UserService yi import et demektir.
export default class UserService {
  constructor(loggerService) {
    this.users = []; // [] yerine getCustomersFromDb() kullanılacak
    this.loggerService = loggerService;
  }
  add(user) {
    //console.log("Kullanıcı Eklendi " + user);
    this.users.push(user);
    this.loggerService.log(user);
  }

  list() {
    //console.log("Kullanıcılar Listelendi");
    return this.users;
  }

  /*getById(id) {
    //console.log(id + " numarasına sahip kullanıcı bulunudu");
    // ===  hem tip hem değer eşitmi diye kontrol ediyor.
    // js de 1=="1" => true 1==="1" => false
    return this.users.find((u) => u.id == id);
  }*/

  getById(id) {
    return this.users.find(u => u.id === id);
  }
}
