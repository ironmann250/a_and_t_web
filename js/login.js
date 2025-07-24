document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form');
    const usernameInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const rememberMeCheckbox = document.querySelector('input[type="checkbox"]');

    // If already logged in, redirect to landing page
    if (localStorage.getItem('isLoggedIn') === 'true') {
        window.location.href = 'payroll-landing-page.html';
        return;
    }

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!usernameInput.value.trim()) {
            alert('Please enter your username');
            usernameInput.focus();
            return;
        }

        if (!passwordInput.value) {
            alert('Please enter your password');
            passwordInput.focus();
            return;
        }

        // Here you would typically make an API call to authenticate
        // For demo purposes, simulate a successful login
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', usernameInput.value.trim());
        
        if (rememberMeCheckbox.checked) {
            localStorage.setItem('rememberMe', 'true');
        }

        window.location.href = 'payroll-landing-page.html';
    });
});