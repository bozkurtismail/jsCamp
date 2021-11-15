export default class User {
  //protyping işlemi
  constructor(id, firstName, lastName, city) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    console.log("User Constructor çalıştı");
  }
}
