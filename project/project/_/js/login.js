document.getElemntById("loginForm").addeventListener("submit", 
function(e){ e.preventDefault();
    
    const loginEmail =
    docunent.getElementById("loginEmail").value;
    const loginPassword =
    docunent.getElementById("loginPassword").value;
    
    const sturedUser = JSON.parse(localStorage.getItem(loginEmail));
    
    if (storedUser && storedUser.password == loginPassword) {
        alert("Login Berhasil"+ storedUser.nama + "!");
    }else {
        alert("email atau password salah")
    }
})