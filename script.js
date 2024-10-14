function handleSubmit(event) {
    event.preventDefault(); // Zapobiega domyślnej akcji formularza
    
    const data = {
    nazwaFirmy: document.getElementById('Company').value,
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
    
    return false;
};

function handleClick() {
    document.getElementById('Company').value = "Nie mam :(",
    document.getElementById('NIP').value = "Co to takeigo",
    document.getElementById('City').value = "Kraków",
    document.getElementById('Street').value = "Rakowicka",
    document.getElementById('HouseNr').value = 27,
    document.getElementById('Mieszkanie').value = "Pawilon A",
    document.getElementById('Kod').value = "32-600",
    document.getElementById('Uwagi').value = "Nie ma łóżek",
    document.getElementById('Branża').value = "IT",
    document.getElementById('check').checked = true;

    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.disabled = true;
    }
    )

    console.log("Wstawiono dane")
}