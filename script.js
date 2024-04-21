// script.js
document.getElementById("generateBtn").addEventListener("click", function() {
    var passwordLength = document.getElementById("passwordLength").value;
    var password = generatePassword(passwordLength);
    document.getElementById("passwordOutput").innerText = password;
});

function generatePassword(length) {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    var password = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}
