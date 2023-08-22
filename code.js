function checkuser() {
  let email = document.getElementById("login-email").value;
  let password = document.getElementById("login-password").value;

  if (email == "admin@admin.com" && password == 123456) {
    alert("Login successful");
  } else {
    alert("Incorrect email or password");
  }
};



document.getElementById('login-bu').addEventListener('click',function(){
    document.getElementById("login-email").value = "";
    document.getElementById("login-password").value = "";
});




