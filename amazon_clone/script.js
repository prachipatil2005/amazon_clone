document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => {
        if (response.ok) {
            alert('Login successful!');
            errorMessage.style.display = 'none';
            return response.text(); // You can return a message from your backend if needed
        } else {
            errorMessage.style.display = 'block';
            throw new Error('Network response was not ok.');
        }
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
});
