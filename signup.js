let btnSignUp = document.getElementById("signup");
let signUp = document.querySelector(".signup");
btnSignUp.onclick = function () {
  signIn.classList.remove("active");
  signUp.classList.remove("inActive");
};
