let customerList: Customer[] = [];


function handleClick(newCustomer) {
    newCustomer = new Customer
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


function saveData(event: Event): void {
    event.preventDefault();

    // Create a new Customer instance
    let newCustomer = new Customer();

    // Assign values from form elements to the newCustomer instance
    newCustomer.id = Math.floor(Math.random() * 100);  // Generate a random id
    newCustomer.company = (document.getElementById('Company') as HTMLInputElement).value;
    newCustomer.nip = (document.getElementById('NIP') as HTMLInputElement).value;
    newCustomer.city = (document.getElementById('City') as HTMLInputElement).value;
    newCustomer.street = (document.getElementById('Street') as HTMLInputElement).value;
    newCustomer.houseNr = (document.getElementById('HouseNr') as HTMLInputElement).value;
    newCustomer.mieszkanie = (document.getElementById('Mieszkanie') as HTMLInputElement).value;
    newCustomer.kodPocztowy = (document.getElementById('Kod') as HTMLInputElement).value;
    newCustomer.uwagi = (document.getElementById('Uwagi') as HTMLInputElement).value;
    newCustomer.Branża = (document.getElementById('Branża') as HTMLInputElement).value;
    newCustomer.check = (document.getElementById('check') as HTMLInputElement).checked;

    console.log(newCustomer);

    // Add the new customer to the customer list
    customerList.push(newCustomer);
    showList();  // Assuming showList is another function to display the customer list

    console.log(customerList);
}


function showForm(): void {
    const customerForm = document.getElementById('customer-form');
    const customerList = document.getElementById('customer-list');

    // Check if the elements exist before attempting to change their styles
    if (customerForm && customerList) {
        customerForm.style.display = "block";
        customerList.style.display = "none";
    } else {
        console.error('Elements not found: customer-form or customer-list');
    }
}


function showList() {
    // Hide the form and show the customer list
    document.getElementById('customer-form')!.style.display = "none"; // `!` is to assert that the element exists
    document.getElementById('customer-list')!.style.display = "block";

    let ul = document.getElementById('customer-list-data') as HTMLUListElement;
    ul.innerHTML = ""; // Clear the existing list

    // Loop through the customerList and add each customer to the list
    for (let customer of customerList) {
        ul.innerHTML += `
            <li>
                ${customer.getData()} ${customer.getAddress()}
                <button class="btn btn-primary" onclick="showCustomer('${customer.id}')">Edytuj</button>
            </li>
        `;
    }
}

// function showCustomer(customerId) {
//     showForm();
//     let customer = customersList.filter()
//     addDataToForm();
// }

function showCustomer(customerId: number): void {
    showForm();  

    let customer = customerList.find(c => c.id === customerId);

    if (customer) {
        // Add the customer's data to the form fields
        addDataToForm(customer);
    } else {
        console.error("Customer not found");
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

