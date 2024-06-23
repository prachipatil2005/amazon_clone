document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');

    // Simple hardcoded username and password check
    if (username === 'user' && password === 'pass') {
        alert('Login successful!');
        errorMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'block';
    }
});
