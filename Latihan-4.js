document.getElementById("registerform").addEventListener("submit", function(e){
            e.preventDefault();
            const nama = document.getElementById("nama").value;
            const email = document.getElementById("email").value;
            const phone_number = document.getElementById("phone_number").value;
            const tanggal_lahir = document.getElementById("tanggal_lahir").value;

            const table = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
            const newRow = table.insertRow();

            newRow.insertCell(0).textContent = nama;
            newRow.insertCell(1).textContent = email;
            newRow.insertCell(2).textContent = phone_number;
            newRow.insertCell(3).textContent = tanggal_lahir;

            document.getElementById("registerform").reset();
        });
