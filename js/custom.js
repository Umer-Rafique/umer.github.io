/**
 * Check Validation
 * For subscriber
 */
function validation() {
  let valid = false;
  let form = document.getElementById("form");
  let email = document.getElementById("sub_email").value;
  let text = document.getElementById("sub_email");
  text.style.border = "1px solid gray";
  let pattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email == "") {
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.style.border = "1px solid red";
    valid = false;
  }
  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.style.border = "1px solid green";
    valid = true;
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.style.border = "1px solid red";
    valid = false;
  }
  return valid;
}

/**
 * USing Swal
 * if true or false Validation
 */
$(".subscribe").click(function () {
  let email_sub = document.getElementById("sub_email").value;
  const valid = validation();
  if (valid) {
    // let response = fetch('../email/index.html');
    // console.log(response);
    // document.getElementById("template_email").append(email_sub)
    // document.getElementById("sub_id").append(id)
    sendEmail()
    Swal.fire({
      title: "Alert!",
      text: "This service is not working.",
      icon: "warning",
      confirmButtonText: "Ok",
    });
    // Swal.fire({
    //   title: "Thankyou!",
    //   text: `Thank You for subscribing ${email_sub}`,
    //   icon: "success",
    //   confirmButtonText: "Ok",
    // });
  } else {
    Swal.fire({
      title: "Warning!",
      text: "Please write correct email.",
      icon: "warning",
      confirmButtonText: "Ok",
    });
  }
});

/**
 * Send message
 * using with SMJS.js
 */
function sendEmail() {
  Email.send({
    SecureToken: "b05c9ec6-abd4-499a-8f35-0e603de300e3",
    To: "umarrafique923@gmail.com",
    From: "umarrafique923@gmail.com",
    Subject: "Umar Portfolio",
    // template: '../email/index.html',
    Body: `Thanks for subscribing me`,
  })/*.then((message) => console.log(message) );*/
}
