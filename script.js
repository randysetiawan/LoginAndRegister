function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password-input');
    var eyeIcon = document.getElementById('eye-icon');
    console.log("togglePasswordVisibility() clicked")
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    }
}