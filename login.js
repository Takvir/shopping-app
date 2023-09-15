document.getElementById('submit-button').addEventListener('click' , function(){
    // For Email
    var userEmail = document.getElementById('user-email');
    var emailText = userEmail.value;
    
        // For Email
     var userName = document.getElementById('username');
     var nameText = userName.value;

    // For User Password
    var userPassword = document.getElementById('user-password');
    var passwordText = userPassword.value;
    
    // For Confirm Password
    var mobie = document.getElementById('mobile');
    var mobileText = mobie.value;

    // if(passwordText != confirmPasswordText)
    // {   
    //     alert('Please give valid user and password')

    // }

    
        if(emailText == 'admin@gmail.com' && passwordText == 123456 && mobileText == 123456789 && nameText == 'admin')
        {
            window.location.href = "main.html";
        }
        else{
            alert('You type wrong credential, name - admin , mail - admin@gmail.com, pass-123456, mob - 123456789')
        }


    
})

function myFunction() {
    var x = document.getElementById("user-password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }