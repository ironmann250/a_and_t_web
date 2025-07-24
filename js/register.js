document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.querySelector('form');
    const passwordInput = document.querySelector('input[type="password"]');
    const confirmPasswordInput = document.querySelectorAll('input[type="password"]')[1];
    const phoneInput = document.querySelector('input[type="tel"]');

    // Phone number formatting
    phoneInput.addEventListener('input', function(e) {
        let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });

    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Basic form validation
        const requiredFields = registerForm.querySelectorAll('input[required]');
        for (let field of requiredFields) {
            if (!field.value.trim()) {
                alert('Please fill in all required fields');
                field.focus();
                return;
            }
        }

        // Password match validation
        if (passwordInput.value !== confirmPasswordInput.value) {
            alert('Passwords do not match');
            confirmPasswordInput.focus();
            return;
        }

        // Email validation
        const emailInput = document.querySelector('input[type="email"]');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            alert('Please enter a valid email address');
            emailInput.focus();
            return;
        }

        // Here you would typically make an API call to register
        console.log('Registration attempt with form data');

        // For demo purposes, simulate a registration
        alert('Registration functionality will be implemented here');
    });
});