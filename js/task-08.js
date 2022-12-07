const formEl = document.querySelector(".login-form");
console.log("formEl: ", formEl);

formEl.addEventListener("submit", submitListener);

function submitListener(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget;
  //   console.log(
  //     "event.currentTarget.email.value: ",
  //     event.currentTarget.email.value
  //   );
  //   console.log(
  //     "event.currentTarget.password.value: ",
  //     event.currentTarget.password.value
  //   );

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  let testObj = {
    email: email.value,
    password: password.value,
  };
  console.log("testObj: ", testObj);

  //   console.log(`email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
