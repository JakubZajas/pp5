const clientList = document.getElementById('clientList');

        function handleSubmit(event) {
            event.preventDefault();

            const company = document.getElementById('Company').value;
            const nip = document.getElementById('NIP').value;
            const city = document.getElementById('City').value;
            const street = document.getElementById('Street').value;
            const houseNr = document.getElementById('HouseNr').value;
            const mieszkanie = document.getElementById('Mieszkanie').value;
            const kod = document.getElementById('Kod').value;
            const uwagi = document.getElementById('Uwagi').value;
            const branża = document.getElementById('Branża').value;

            const newRow = clientList.insertRow();
            newRow.innerHTML = `
                <td>${company}</td>
                <td>${nip}</td>
                <td>${city}</td>
                <td>${street}</td>
                <td>${houseNr}</td>
                <td>${mieszkanie}</td>
                <td>${kod}</td>
                <td>${uwagi}</td>
                <td>${branża}</td>
            `;

            // Czyszczenie formularza
            document.querySelector('form').reset();
        }

        function handleClick() {
            // Przykładowe auto-uzupełnienie
            document.getElementById('Company').value = "Przykładowa Firma";
            document.getElementById('NIP').value = "1234567890";
            document.getElementById('City').value = "Warszawa";
            document.getElementById('Street').value = "Przykładowa 1";
            document.getElementById('HouseNr').value = "1";
            document.getElementById('Mieszkanie').value = "1A";
            document.getElementById('Kod').value = "00-001";
            document.getElementById('Uwagi').value = "Brak uwag";
            document.getElementById('Branża').value = "IT";
            document.getElementById('check').checked = true;
        }