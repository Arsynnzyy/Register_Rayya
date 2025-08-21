document.getElementById("registerform").addEventListener("submit", function(e) {
            e.preventDefault();

            const nama = document.getElementById("nama").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const nomorHP = document.getElementById("nomorHP").value;
            const tanggal = document.getElementById("tanggal").value;
            const gender = document.querySelector('input[name="gender"]:checked')?.value || '';
            
            // buat simpan di local storage
            const user = {
                nama: nama,
                email: email,
                password: password,
                nomorHP: nomorHP,
                tanggal: tanggal,
                gender: gender,
            };
            localStorage.setItem(enail, JSON.stringify(user));
            
            alert("Sukses yah");
            
            // Masukan data ke tabel
            const table = document.getElementById("dataTable").querySelector("tbody");
            const newRow = table.insertRow();

            newRow.insertCell(0).textContent = nama;
            newRow.insertCell(1).textContent = email;
            newRow.insertCell(1).textContent = password;
            newRow.insertCell(2).textContent = nomorHP;
            newRow.insertCell(3).textContent = tanggal;
            newRow.insertCell(4).textContent = gender;

            form.reset();
        });
