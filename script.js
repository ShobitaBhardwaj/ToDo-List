document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = loginForm.username.value.trim();
            const password = loginForm.password.value.trim();
            if (username === '' || password === '') {
                document.getElementById('loginError').innerText = 'Please enter username and password.';
            } else {
                authenticate();
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = signupForm.email.value.trim();
            const password = signupForm.password.value.trim();
            const confirmPassword = signupForm.confirmPassword.value.trim();

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                document.getElementById('signupError').innerText = 'Invalid email format.';
                return;
            }

            if (password.length < 6) {
                document.getElementById('signupError').innerText = 'Password should be at least 6 characters long.';
                return;
            }

            if (password !== confirmPassword) {
                document.getElementById('signupError').innerText = 'Passwords do not match.';
                return;
            }

            alert("Signup Successful");
        });
    }
});


let password = document.getElementById("mypassword"); 
let power = document.getElementById("power-point"); 
password.oninput = function () { 
    let point = 0; 
    let value = password.value; 
    let widthPower =  
        ["1%", "25%", "50%", "75%", "100%"]; 
    let colorPower =  
        ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"]; 
  
    if (value.length >= 6) { 
        let arrayTest =  
            [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/ ]; 
        arrayTest.forEach((item) => { 
            if (item.test(value)) { 
                point += 1; 
            } 
        }); 
    } 
    power.style.width = widthPower[point]; 
    power.style.backgroundColor = colorPower[point]; 
};

function myFunction() {
    var x = document.getElementById("mypassword");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}

function forgotPassword(){
    var mail = prompt("Enter your registered Email address");
    if(mail.length === 0){
        alert('Enter your email')
    }
    else
        alert('Login code has been sent to registered email')
}

function authenticate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("mypassword").value; 
    if (username === '12212004' && password === '123abcA#') {
        window.location.href = "index.html";
    } else {
        alert('Enter valid username and password');
    }
}