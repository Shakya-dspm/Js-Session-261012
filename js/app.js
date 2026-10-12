//  localStorage.clear();

//  localStorage.setItem("name", "Shakya");
//  localStorage.setItem("city", "Colombo");
//  localStorage.setItem("age", "20");

//  //localStorage.removeItem("age");


//  let name = localStorage.getItem("name");
//  let city = localStorage.getItem("city");
//  let age = localStorage.getItem("age");
//  console.log(name, age, city);

// Object in localStorage

let customer = {
    name : "Shakya",
    age : 20,
    isMarried : false,
}

localStorage.setItem("customer", customer);