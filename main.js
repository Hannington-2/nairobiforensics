// login{
 function showform(formId) {
    document.querySelectorAll(".form-box").forEach(form => form.classList.remove("active"));
    document.getElementById(formId).classList.add("active");
 }

//  // Simulate login success (replace with server-side login later)
// function loginUser(email, role) {
//     // Hide login/register form
//     document.getElementById("login-form").classList.remove("active");
//     document.getElementById("register-form").classList.remove("active");

//     // Show user details
//     const userDetailsDiv = document.createElement("div");
//     userDetailsDiv.id = "user-details";
//     userDetailsDiv.innerHTML = `
//         <h2>Welcome ${email}</h2>
//         <p>Role: ${role}</p>
//         <p>Your details are read-only.</p>
//         <input type="text" value="${email}" readonly>
//     `;
//     document.body.appendChild(userDetailsDiv);
// }

// // Handle login form submission
// document.querySelector("#login-form form").addEventListener("submit", function(e){
//     e.preventDefault();
//     const email = this.querySelector("input[name='email']").value;
//     const role = this.querySelector("select[name='role']").value;
//     loginUser(email, role);
// });


//   back to top button
 //Get the button
 let backToTopButton = document.getElementById("backToTop");
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
  }

//     // REGISTER ROUTE
// app.post('/register', (req, res) => {
//     const { full_name, email, password, role } = req.body;
//     if (!full_name || !email || !password || !role) {
//         return res.status(400).json({ message: "Please fill all fields" });
//     }

//     // Hash password (optional: bcrypt)
//     const bcrypt = require('bcryptjs');
//     const hashedPassword = bcrypt.hashSync(password, 10);

//     // Insert into DB
//     db.query(
//         'INSERT INTO users (full_name, email, password_hash, role) VALUES (?, ?, ?, ?)',
//         [full_name, email, hashedPassword, role],
//         (err, result) => {
//             if (err) {
//                 console.error(err);
//                 return res.status(500).json({ message: "Database error" });
//             }
//             res.json({ message: "Registration successful", user_id: result.insertId });
//         }
//     );
// });

// // LOGIN ROUTE
// app.post('/login', (req, res) => {
//     const { email, password } = req.body;
//     if (!email || !password) return res.status(400).json({ message: "Fill all fields" });

//     db.query(
//         'SELECT * FROM users WHERE email = ?',
//         [email],
//         (err, results) => {
//             if (err) return res.status(500).json({ message: "Database error" });
//             if (results.length === 0) return res.status(401).json({ message: "User not found" });

//             const bcrypt = require('bcryptjs');
//             const user = results[0];
//             if (!bcrypt.compareSync(password, user.password_hash)) {
//                 return res.status(401).json({ message: "Incorrect password" });
//             }

//             res.json({ message: "Login successful", user });
//         }
//     );
// });



//     =DARAJA 2.0 payment-card

let popupTimer;

function showPaymentPopup() {
    const popup = document.getElementById("paymentPopup");

    popup.classList.add("show");

    clearTimeout(popupTimer);

    // Auto-hide after 5 seconds
    popupTimer = setTimeout(() => {
        popup.classList.remove("show");
    }, 5000);
}

function closePaymentPopup() {
    const popup = document.getElementById("paymentPopup");
    popup.classList.remove("show");
    clearTimeout(popupTimer);
}

function capturePayment() {
    const amount = document.getElementById("amount").value;
    const phone = document.getElementById("phone").value;

    if (amount === "" || phone === "") {
        alert("Please enter both the Amount and Phone Number.");
        return;
    }

    alert(`Payment successful!\n\nAmount: KES ${amount}\nPhone: ${phone}`);

    closePaymentPopup();
}



function capturePayment(){
    const amount = document.getElementById("amount").value;
    const phone = document.getElementById("phone").value;

    if(amount=== "" || phone===""){
        alert("Please enter both the Amount and Phone Number.");
        return

        // proof that it worked
        alert(`Payment successfully..\n\nAmount:KES ${amount}\nPhone:${phone}`);

}
}
// // server creation ... import packages
// const express = require('express');
// const mysql = require('mysql2');
// const bodyParser = require('body-parser');
// const dotenv = require('dotenv');
// const cors = require('cors');
// // initiallise Express app
// const app = express();
// const port = 5000;
// // use middlewares
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());
// // connect to MYSQL
// const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     port: process.env.DB_PORT
// });

// db.connect(err => {
//     if (err) {
//         console.error('Error connecting to MySQL:', err);
//         return;
//     }
//     console.log('Connected to MySQL database.');
// });
// // Create test route
// app.get('/', (req, res) => {
//     res.send('Server is running!');
// });
// // start the server
// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });

