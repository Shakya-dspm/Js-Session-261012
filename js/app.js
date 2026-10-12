// localStorage.clear();

//  localStorage.setItem("name", "Shakya");
//  localStorage.setItem("city", "Colombo");
//  localStorage.setItem("age", "20");

//  //localStorage.removeItem("age");


//  let name = localStorage.getItem("name");
//  let city = localStorage.getItem("city");
//  let age = localStorage.getItem("age");
//  console.log(name, age, city);

// Object in localStorage

let customerList = [{
    name : "Shakya",
    age : 20,
    isMarried : false,
},{
    name : "Hirun Thejan",
    age : 28,
    isMarried : true,
}]

//  localStorage.setItem("customer", customer);

let stringCustomer = JSON.stringify(customerList);
localStorage.setItem("customer", stringCustomer);

let getcustomer = localStorage.getItem("customer");

let objectCustomer = JSON.parse(getcustomer);
console.log(objectCustomer);