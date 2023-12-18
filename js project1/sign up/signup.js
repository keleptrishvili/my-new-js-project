function isValid() {
    const firstName = document.getElementById('firstNameInput');
    const lastName = document.getElementById('lastNameInput');
    const email = document.getElementById('emailInput');
    const password = document.getElementById('passwordInput');
    const repeatPassword = document.getElementById('repeatPasswordInput');
  
    document.querySelectorAll('.alert').forEach(alert => alert.style.display = 'none');
  
    if (firstName.value.length === 0) {
      document.getElementById('alertFirstName').style.display = 'block';
      return false;
    }
  
    if (lastName.value.length === 0) {
      document.getElementById('alertLastName').style.display = 'block';
      return false;
    }
  
    if (email.value.length === 0) {
      document.getElementById('alertEmail1').style.display = 'block';
      return false;
    } else if (email.validity.valid !== true) {
      document.getElementById('alertEmail2').style.display = 'block';
      return false;
    }
  
    if (password.value.length === 0) {
      document.getElementById('alertPassword1').style.display = 'block';
      return false;
    } else if (password.value.length < 8) {
      document.getElementById('alertPassword2').style.display = 'block';
      return false;
    }
  
    if (repeatPassword.value !== password.value) {
      document.getElementById('alertRepeatPassword').style.display = 'block';
      return false;
    }
  
    return true; 
  }
  
  document.getElementById('submit').onclick = function() {
    if (!isValid()) {
      return; 
    }
  

    document.getElementById('congratulationsMessage').innerHTML = 'Your account has been successfully created!';
    document.querySelectorAll('.alert').forEach(alert => alert.style.display = 'none');
  };


