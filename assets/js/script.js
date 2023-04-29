document.addEventListener('DOMContentLoaded', function () {

    var myForm = document.querySelector('#myForm');
    myForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var action = myForm.getAttribute('action');
        var email = document.querySelector('#user-email').value;

        if (!email) {
            document.querySelector('.validationText').textContent = 'Please Enter Email';
            document.querySelector('.validationText').style.display = 'block';
        } else if (!IsEmail(email)) {
            document.querySelector('.validationText').textContent = 'Invalid email';
            document.querySelector('.validationText').style.display = 'block';
        } else {
            var url = action + '?email=' + email;
            window.open(url, '_blank');
            document.querySelector('#user-email').value = '';
        }

        document.querySelector('input#user-email').addEventListener('focus', function () {
            document.querySelector('.validationText').style.display = 'none';
        });
    });

    // Checking email
    function IsEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }

    // Scroll effect
    document.querySelector('.about-link').addEventListener('click', function (e) {
        var targetOffset = document.querySelector('#about-us').offsetTop;
        window.scrollTo({ top: targetOffset, behavior: 'smooth' });
        e.preventDefault();
    });

    document.querySelector('.work-link').addEventListener('click', function (e) {
        var targetOffset = document.querySelector('#featured').offsetTop;
        window.scrollTo({ top: targetOffset, behavior: 'smooth' });
        e.preventDefault();
    });

    document.querySelector('.services-link').addEventListener('click', function (e) {
        var targetOffset = document.querySelector('#services').offsetTop;
        window.scrollTo({ top: targetOffset, behavior: 'smooth' });
        e.preventDefault();
    });

    document.querySelector('.contact-link').addEventListener('click', function (e) {
        var targetOffset = document.querySelector('#contact-us').offsetTop;
        window.scrollTo({ top: targetOffset, behavior: 'smooth' });
        e.preventDefault();
    });

});

