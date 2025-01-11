const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("loginUsername");
  const password = document.getElementById("loginPassword");

  if (username.value.trim() === "" || password.value.trim() === "") {
    alert("Please fill all fields");
  } else {
    alert("Login Successful");
    loginForm.reset();
  }
});


registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("registerUsername");
  const email = document.getElementById("registerEmail");
  const password = document.getElementById("registerPassword");
  const confirmPassword = document.getElementById("registerConfirmPassword");
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (username.value.trim() === "" || email.value.trim() === "" || password.value.trim() === "" || confirmPassword.value.trim() === "") {
    alert("Please fill all fields");
    return;
  }
if(emailRegex.test(email))
  emailError.style.display = "none"; 
else
{
  emailError.style.display = "block"; 
  alert("Please fill valid emailId");
  return;
}
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match");
    return;
  }

  alert("Registration Successful");
  registerForm.reset();
});
async function registerUser(event)
{

}
async function loginUser(event) {
  event.preventDefault(); 
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {

      const response = await fetch("http://localhost:8080/api/login", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
          const message = await response.text();
          alert(message); 
          const error = await response.text();
          alert(error); 
      }
  } catch (err) {
      console.error("Error:", err);
      alert("Failed to connect to the server.");
  }
}
