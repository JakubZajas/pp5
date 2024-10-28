function handleSubmit(event) {
    event.preventDefault(); // Zapobiega domyślnej akcji formularza
    
    let data = {
        id: Math.floor(Math.random() * 100),
        company: document.getElementById('Company').value,
        nip: document.getElementById('NIP').value,
        city: document.getElementById('City').value,
        street: document.getElementById('Street').value,
        houseNr: document.getElementById('HouseNr').value,
        mieszkanie: document.getElementById('Mieszkanie').value,
        kodPocztowy: document.getElementById('Kod').value,
        uwagi: document.getElementById('Uwagi').value,
        Branża: document.getElementById('Branża').value,
        check: document.getElementById('check').checked
        };

    console.log(data);
    customerList.push(data)
    showList()

    return false;
};

function handleClick() {
    document.getElementById('Company').value = "Nie mam :(",
    document.getElementById('NIP').value = 9999,
    document.getElementById('City').value = "Kraków",
    document.getElementById('Street').value = "Rakowicka",
    document.getElementById('HouseNr').value = 27,
    document.getElementById('Mieszkanie').value = "Pawilon A",
    document.getElementById('Kod').value = "32-600",
    document.getElementById('Uwagi').value = "Nie ma łóżek",
    document.getElementById('Branża').value = "IT",
    document.getElementById('check').checked = true;

    console.log("Wstawiono dane")
}


function showForm() {
    document.getElementById('customer-form').style.display = "block";
    document.getElementById('customer-list').style.display = "none";
}

var customerList = [];

function showList() {
    document.getElementById('customer-form').style.display = "none";
    document.getElementById('customer-list').style.display = "block";

    let ul = document.getElementById('customer-list-data');
    ul.innerHTML = "";
    for (let customer of customerList) {
        ul.innerHTML += `<li>${customer.nazwaFirmy} <button class="btn  btn-primary"
        onclick"showCustomer('${customer.id}')">Edytuj</button></>`
    }
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
    }
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

    }
}


function showCustomer(customerId) {
    showForm();
    let customer = customerList.find();
    // addDataToForm(customer)

}