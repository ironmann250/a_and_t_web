// Check login status on page load
document.addEventListener('DOMContentLoaded', function() {
    checkLoginStatus();
});

function getInitials(name) {
    return name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .substring(0, 2);
}

function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userName = localStorage.getItem('userName');
    
    const loggedInView = document.getElementById('loggedInView');
    const loggedOutView = document.getElementById('loggedOutView');
    const userDisplayName = document.getElementById('userDisplayName');
    const userInitials = document.getElementById('userInitials');
    const userInitialsDropdown = document.getElementById('userInitialsDropdown');
    const userFullName = document.getElementById('userFullName');

    if (isLoggedIn === 'true' && userName) {
        loggedInView?.classList.remove('hidden');
        loggedOutView?.classList.add('hidden');
        document.getElementById('mobileLoggedInView')?.classList.remove('hidden');
        const initials = getInitials(userName);
        userDisplayName.textContent = userName;
        userFullName.textContent = userName;
        userInitials.textContent = initials;
        userInitialsDropdown.textContent = initials;
    } else {
        loggedInView?.classList.add('hidden');
        loggedOutView?.classList.remove('hidden');
        document.getElementById('mobileLoggedInView')?.classList.add('hidden');
    }
}

function handleLogout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    window.location.href = 'login.html';
}