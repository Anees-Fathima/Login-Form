/* function validate_form() {
  let x = document.getElementById("name").value;
  let y = document.getElementById("password").value;
  let z = document.getElementById("email").value;
  let w = document.getElementById("contact").value;
  if (x == "") {
    alert("Username must be filled");
  } else if (y == "") {
    alert("Pasword must be filled");
  } else if (z == "") {
    alert("Email must be filled");
  } else if (w == "") {
    alert("Contact must be filled");
  } else if (!w.match(/^\d{10}$/)) {
    alert("Enter only a 10-digit number for Contact");
  } else if (w.length > 10) {
    alert("Only 10 digits allowed for Contact");
  } else {
    alert("Form Submitted Successfully.");
  }
}
let inputEl = document.querySelector(".inp");
let showEl = document.querySelector(".fa-eye");
let hideEl = document.querySelector(".fa-eye-slash");
inputEl.addEventListener("input", () => {
  if (inputEl.value == "") {
    showEl.style.display = "none";
    hideEl.style.display = "none";
  } else if (!inputEl.value == "") {
    showEl.style.display = "inline";
  } else if (inputEl.type == 'password') {
    hideEl.style.display = "inline"
    showEl.style.display = "none";;

  } else {
    showEl.addEventListener("click", () => {
      inputEl.type = "text";
      
      
    });

    hideEl.addEventListener("click", () => {
      inputEl.type = "password";
      hideEl.style.display = "none";
      showEl.style.display = "inline";
    });
  }
});
/* showEl.addEventListener("click", () =>{
    inputEl.type="text";
    hideEl.classList.remove("hide");
    showEl.classList.add("hide")
})

hideEl.addEventListener("click", () =>{
    inputEl.type="password";
    hideEl.classList.add("hide");
    showEl.classList.remove("hide")
}) */


  function validate_form() {
  let x = document.getElementById("name").value;
  let y = document.getElementById("password").value;
  let z = document.getElementById("email").value;
  let w = document.getElementById("contact").value;
  function valid(z) {
    const pattern =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(z);
  }
  let res=valid(z);
  /* if (res!="true"){
    alert("Enter a valid email")
  } */
  if (x == "") {
    alert("Username must be filled");
  } else if (y == "") {
    alert("Password must be filled");
  } else if (z == "") {
    alert("Email must be filled");
  } else if (w == "") {
    alert("Contact must be filled");
  } else if (!w.match(/^\d{10}$/)) {
    alert("Enter only a 10-digit number for Contact");
  } else if (!res){
    alert("Enter a valid email")
  } else{
    alert("Form Submitted Successfully.");
  }
}

let inputEl = document.querySelector(".inp");
let showEl = document.querySelector(".fa-eye");
let hideEl = document.querySelector(".fa-eye-slash");

// Initially hide both icons
showEl.style.display = "none";
hideEl.style.display = "none";

// Show eye icon only if input is not empty
inputEl.addEventListener("input", () => {
  if (inputEl.value === "") {
    showEl.style.display = "none";
    hideEl.style.display = "none";
    inputEl.type = "password"; // reset to password when cleared
  } else {
    showEl.style.display = "inline";
    hideEl.style.display = "none";
    inputEl.type = "password"; // default to password
  }
});

// Toggle password visibility
showEl.addEventListener("click", () => {
  inputEl.type = "text";
  showEl.style.display = "none";
  hideEl.style.display = "inline";
});

hideEl.addEventListener("click", () => {
  inputEl.type = "password";
  hideEl.style.display = "none";
  showEl.style.display = "inline";
});
