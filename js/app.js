 localStorage.clear();

 localStorage.setItem("name", "Shakya");
 localStorage.setItem("city", "Colombo");
 localStorage.setItem("age", "20");

 //localStorage.removeItem("age");


 let name = localStorage.getItem("name");
 let city = localStorage.getItem("city");
 let age = localStorage.getItem("age");
 console.log(name, age, city);