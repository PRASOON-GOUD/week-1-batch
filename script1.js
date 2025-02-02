// export let name ="mru";
// export function greet(){
//     return "good morning students" + name;
// }
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;

    let username = document.getElementById("uName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("uPass").value;
    let confirmPassword = document.getElementById("cPass").value;

    document.getElementById("UserNameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("uPassError").innerText = "";
    document.getElementById("cPassError").innerText = "";

    if (username.trim() === "") {
        document.getElementById("UserNameError").innerText = "Username is required";
        isValid = false;
    }

    if (email.trim() === "" || !email.includes("@")) {
        document.getElementById("emailError").innerText = "Valid email is required";
        isValid = false;
    }

    if (password.length < 6) {
        document.getElementById("uPassError").innerText = "Password must be at least 6 characters";
        isValid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById("cPassError").innerText = "Passwords do not match";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
});