function generateOTP() {
    var digit = '0123456789';
    let otp = '';

    for (let i = 0; i < 6; i++) {
        otp += digit[Math.floor(Math.random() * 10)]
    }
    var span = document.querySelector('.otpdisplay span');
    span.innerHTML = otp;
}