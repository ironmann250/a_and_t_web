document.addEventListener('DOMContentLoaded', function() {
    // Desktop dropdown
    const userInitials = document.getElementById('userInitials');
    const userDropdown = document.getElementById('userDropdown');

    function updateUserState(isLoggedIn) {
        // This function can be expanded with actual auth logic
        if (isLoggedIn) {
            document.querySelectorAll('.logged-in-view').forEach(el => el.classList.remove('hidden'));
            document.querySelectorAll('.logged-out-view').forEach(el => el.classList.add('hidden'));
        } else {
            document.querySelectorAll('.logged-in-view').forEach(el => el.classList.add('hidden'));
            document.querySelectorAll('.logged-out-view').forEach(el => el.classList.remove('hidden'));
        }
    }

    // Initialize user state (replace with actual auth check)
    updateUserState(true);

    if (userInitials && userDropdown) {
        // Toggle dropdown on profile click
        userInitials.addEventListener('click', function(e) {
            e.stopPropagation();
            userDropdown.classList.toggle('hidden');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!userInitials.contains(e.target) && !userDropdown.contains(e.target)) {
                userDropdown.classList.add('hidden');
            }
        });

        // Close dropdown on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                userDropdown.classList.add('hidden');
            }
        });
    }
});