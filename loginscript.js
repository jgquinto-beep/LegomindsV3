document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Save user input to localStorage
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    window.alert("You Have Successfully Logged in!"); 

    // Redirect to details page
    window.location.href = 'details.html';
});
