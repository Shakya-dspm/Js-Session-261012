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

// let customerList = [{
//     name : "Shakya",
//     age : 20,
//     isMarried : false,
// },{
//     name : "Hirun Thejan",
//     age : 28,
//     isMarried : true,
// }]

// //  localStorage.setItem("customer", customer);

// let stringCustomer = JSON.stringify(customerList);
// localStorage.setItem("customer", stringCustomer);

// let getcustomer = localStorage.getItem("customer");

// let objectCustomer = JSON.parse(getcustomer);
// console.log(objectCustomer);



let customerList = JSON.parse(localStorage.getItem("customerList")) || [];

function btnaddCustomrOnAction() {
    
    let customer = {
        id : document.getElementById("txtid").value,
        name : document.getElementById("txtname").value,
        age : document.getElementById("txtage").value,
        address : document.getElementById("txtaddress").value
    }
    customerList.push(customer);
    localStorage.setItem("customerList", JSON.stringify(customerList));
    btnLoadTableOnAction();
}

function btnSearchCustomrOnAction() {
   
    let id =document.getElementById("txtid").value

    let customer = customerList.find(c => c.id === id);

    if(customer){
        document.getElementById("txtname").value = customer.name;
        document.getElementById("txtage").value = customer.age;
        document.getElementById("txtaddress").value = customer.address;
    }else{
        alert("Customer not found");
    }
}

function btnDeleteCustomrOnAction() {
    
     let id =document.getElementById("txtid").value

    let index = customerList.findIndex(c => c.id === id);

    if(index !== -1){
        customerList.splice(index, 1);
        localStorage.setItem("customerList", JSON.stringify(customerList));
        btnLoadTableOnAction();
    }else{
        alert("Customer not found");
    }
}

function btnUpdateCustomrOnAction() {
    alert("update customer");
}

function btnClearStorageOnAction() {
    localStorage.clear();
    customerList = [];
}

function btnLoadTableOnAction() {
    alert("load table");

    let tblbdy = "";

    customerList.forEach(customer => {
        tblbdy += `
            <tr>
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.age}</td>
            <td>${customer.address}</td>
        </tr>
        `;
    });
    document.getElementById("tblCustomer").innerHTML = tblbdy;
}