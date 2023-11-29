document.getElementById('submit').onclick = function() {
    
    const email = document.getElementById('emailInput');

    if (email.value.length === 0) {
        document.getElementById('alert1').style.display = 'block';
        document.getElementById('alert2').style.display = 'none';
        email.style.border = '1px solid red';
        email.previousElementSibling.style.color = 'red';
    } else if (email.validity.valid !== true) { 
        document.getElementById('alert1').style.display = 'none';
        document.getElementById('alert2').style.display = 'block';
        email.style.border = '1px solid red';
        email.previousElementSibling.style.color = 'red'; 
    } else {
        document.getElementById('alert2').style.display = 'none';
        document.getElementById('alert1').style.display = 'none';
        email.style.border = '1px solid green';
        email.previousElementSibling.style.color = 'green';
    }

    const password = document.getElementById('passwordInput'); 

    if (password.value.length === 0) {
        document.getElementById('alert3').style.display = 'block';
        document.getElementById('alert4').style.display = 'none';
        password.style.border = '1px solid red';
        password.previousElementSibling.style.color = 'red';
    } else if (password.value.length < 8) {
        document.getElementById('alert3').style.display = 'none';
        document.getElementById('alert4').style.display = 'block';
        password.style.border = '1px solid red';
        password.previousElementSibling.style.color = 'red';
    } else {
        document.getElementById('alert3').style.display = 'none';
        document.getElementById('alert4').style.display = 'none';
        password.previousElementSibling.style.color = 'green';
        password.style.border = '1px solid green';
    }
}