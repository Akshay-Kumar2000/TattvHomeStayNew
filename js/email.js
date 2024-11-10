function sendMail(){
    let params = {
        name : document.getElementById('user_name').value,
        email : document.getElementById('user_email').value,
        phone_number : document.getElementById('phone_number').value,
        user_location : document.getElementById('user_location').value,
        message : document.getElementById('message').value,
    }
    emailjs.sendForm('contact_form', 'template_rh33rd3', params).the
}