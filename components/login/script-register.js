document.getElementById("register-btn").addEventListener("click", function(){

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === ""){
        alert("Por favor, completa todos los campos ");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if(users.some(user => user.username === username)){
        alert("Este usuario ya esta registrado");
        return;
    }

    users.push({username, password});
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registro exitoso. Ahora puedes iniciar sesión ");
    window.location.href = "./Login.html";

})

