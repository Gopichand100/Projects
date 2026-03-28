// Modal functions
function openModal() {
    document.getElementById('loginModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// Close modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) {
        closeModal();
    }
};

// Course enrollment with progress simulation
function enroll(course) {
    alert(`Enrolled in ${course}! Progress will update.`);
    const bars = document.querySelectorAll('.progress-bar');
    bars.forEach(bar => {
        let width = parseInt(bar.style.width || 0) + 10;
        if (width > 100) width = 100;
        bar.style.width = width + '%';
    });
}

// Login form handler (demo - prevents default submit)
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        if (email && password) {
            alert('Logged in successfully!');
            closeModal();
            form.reset();
        }
    });
});