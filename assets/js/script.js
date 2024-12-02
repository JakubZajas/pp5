"use strict";
var customerList = [];
function handleClick(newCustomer) {
    newCustomer = new Customer;
    document.getElementById('Company').value = newCustomer.Company,
        document.getElementById('NIP').value = newCustomer.NIP,
        document.getElementById('City').value = newCustomer.City,
        document.getElementById('Street').value = newCustomer.Street,
        document.getElementById('HouseNr').value = newCustomer.HouseNr,
        document.getElementById('Mieszkanie').value = newCustomer.Mieszkanie,
        document.getElementById('Kod').value = newCustomer.Kod,
        document.getElementById('Uwagi').value = newCustomer.Uwagi,
        document.getElementById('Branża').value = newCustomer.Branża,
        document.getElementById('check').checked = newCustomer.check;
}
function saveData(event) {
    event.preventDefault();
    let newCustomer = new Customer();
    newCustomer.id = Math.floor(Math.random() * 100),
        newCustomer.company = document.getElementById('Company').value,
        newCustomer.nip = document.getElementById('NIP').value,
        newCustomer.city = document.getElementById('City').value,
        newCustomer.street = document.getElementById('Street').value,
        newCustomer.houseNr = document.getElementById('HouseNr').value,
        newCustomer.mieszkanie = document.getElementById('Mieszkanie').value,
        newCustomer.kodPocztowy = document.getElementById('Kod').value,
        newCustomer.uwagi = document.getElementById('Uwagi').value,
        newCustomer.Branża = document.getElementById('Branża').value,
        newCustomer.check = document.getElementById('check').checked;
    console.log(newCustomer);
    customerList.push(newCustomer);
    showList();
    console.log(customerList);
}
;
function showForm() {
    document.getElementById('customer-form').style.display = "block";
    document.getElementById('customer-list').style.display = "none";
}
function showList() {
    document.getElementById('customer-form').style.display = "none";
    document.getElementById('customer-list').style.display = "block";
    let ul = document.getElementById('customer-list-data');
    ul.innerHTML = "";
    for (let customer of customerList) {
        ul.innerHTML += `<li>${customer.getData()}${customer.getAddress()}<button class="btn  btn-primary" onclick"showCustomer('${customer.id}')">Edytuj</button></>`;
    }
}
function showCustomer(customerId) {
    showForm();
    let customer = customersList.filter();
    addDataToForm();
}
function getCustomer() {
    return {
        comapny: "ABB",
        nip: 1203,
        city: "Kraków",
        street: "Rakowicka",
        houseNr: "27",
        mieszkanie: "A301",
        kodPocztowy: "30-600",
        uwagi: "Aadawd",
        Branża: "IT",
        check: true
    };
}
function getEmptyCustomer() {
    return {
        comapny: "",
        nip: "",
        city: "",
        street: "",
        houseNr: "",
        mieszkanie: "",
        kodPocztowy: "",
        uwagi: "",
        Branża: "",
        check: false
    };
}
