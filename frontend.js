// frontend.js

// Show/hide login/register forms
function showform(formId) {
  document.querySelectorAll(".form-box").forEach(f => f.classList.remove("active"));
  document.getElementById(formId).classList.add("active");
}

// Login form
document.querySelector("#login-form form").addEventListener("submit", async function(e){
  e.preventDefault();
  const email = this.querySelector("input[name='email']").value;
  const password = this.querySelector("input[name='password']").value;

  const response = await fetch('http://localhost:5000/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();
  if (data.message === "Login successful") {
    alert(`Welcome ${data.user.full_name} (${data.user.role})`);
  } else {
    alert(data.message);
  }
});

// Register form
document.querySelector("#register-form form").addEventListener("submit", async function(e){
  e.preventDefault();
  const full_name = this.querySelector("input[name='full_name']").value;
  const email = this.querySelector("input[name='email']").value;
  const password = this.querySelector("input[name='password']").value;
  const role = this.querySelector("select[name='role']").value;

  const response = await fetch('http://localhost:5000/register', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ full_name, email, password, role })
  });

  const data = await response.json();
  alert(data.message);
});

// Back to top button
let backToTopButton = document.getElementById("backToTop");
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// Payment popup
let popupTimer;
function showPaymentPopup() {
  const popup = document.getElementById("paymentPopup");
  popup.classList.add("show");
  clearTimeout(popupTimer);
  popupTimer = setTimeout(() => popup.classList.remove("show"), 5000);
}
function closePaymentPopup() {
  const popup = document.getElementById("paymentPopup");
  popup.classList.remove("show");
  clearTimeout(popupTimer);
}
function capturePayment() {
  const amount = document.getElementById("amount").value;
  const phone = document.getElementById("phone").value;
  if (!amount || !phone) return alert("Enter both Amount and Phone");
  alert(`Payment successful!\nAmount: KES ${amount}\nPhone: ${phone}`);
  closePaymentPopup();
}
