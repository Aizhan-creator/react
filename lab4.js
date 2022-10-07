// Создайте класс Book с параметрами: 

class Book{
  
   #name;
   #code;
   #pages;
  

   constructor(name, code, pages) {
      this.setName(name);
      this.setCode(code);
      this.setPages(pages);
   }
   getBookData() {
      return this.name + this.code + this.pages;
   }
}
class ScientificBook extends Book{
   #price;
   #publisher;

   constructor(name, code, pages, price, publisher){
      super(name, code, pages);
      this.setPrice(price);
      this.setPublisher(publisher);
   }

   ScientificBook(name, code, pages, price, publisher){
      console.log(name);
   }
}

const book = new Book("Sarah", "3030", 322);
console.log(book);

class Library{
  
   #name;
   #city;
   #country;
  

   constructor(name, city, country) {
      this.setName(name);
      this.setCity(city);
      this.setCountry(country);
   }
   addBook(book) {
      return this.setName;
   }
}
