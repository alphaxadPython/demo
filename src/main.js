
document.addEventListener("DOMContentLoaded", () => {
  //initialize variable and assign to login and createAccount ids
const loginForm = document.querySelector("#login");
const createAccountForm = document.querySelector("#createAccount");
//link createAccount to loginForm
document.querySelector("#linkCreateAccount").addEventListener("click", e => {
  e.preventDefault();
  loginForm.classList.add("form--hidden");
  createAccountForm.classList.remove("form--hidden");
});
//link loginForm to createAccount
document.querySelector("#linkLogin").addEventListener("click", e => {
  e.preventDefault();
  loginForm.classList.remove("form--hidden");
  createAccountForm.classList.add("form--hidden");
});

});
