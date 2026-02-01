document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const role = document.getElementById('role').value;
    localStorage.setItem('username', username);
    localStorage.setItem('role', role);
    window.location.href = 'map.html';
});

function toggleDoctorFields() {
    const role = document.getElementById("role").value;
    const doctorFields = document.getElementById("doctorFields");
    doctorFields.style.display = (role === "doctor") ? "block" : "none";
}
