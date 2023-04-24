var sendOtpButton = document.querySelector('.send-otp-conatiner button');

sendOtpButton.addEventListener('click', function() {
  var mobileInput = document.querySelector('.input-tabs input');
  
  // Check if mobile number is 10 digits long
  if (mobileInput.value.length !== 10) {
    alert("Please enter a 10 digit mobile number.");
    return;
  }
  
  var mobileNumber = localStorage.getItem('mobileNumber');
  if (mobileNumber !== mobileInput.value) {
    alert("You are not signed up. Please sign up first.");
    return;
  }

  
  var otpInput = document.createElement("input");
  otpInput.type = "number";
  otpInput.maxLength = 4;
  otpInput.placeholder = "Enter OTP";
  otpInput.classList.add("otp-input"); // Add classes to the OTP input element
  otpInput.style.padding = "10px"; // Add styles to the OTP input element
  otpInput.style.marginBottom = "5px"; // Add bottom margin to the OTP input element
  otpInput.style.borderRadius = "12px"; // Add border radius to the OTP input element
  otpInput.style.width='70%';
  
  var submitButton = document.createElement('button');
  submitButton.textContent = 'Submit';
  
  var sendOtpContainer = document.querySelector('.send-otp-conatiner');
  sendOtpContainer.innerHTML = '';
  sendOtpContainer.appendChild(otpInput);
  sendOtpContainer.appendChild(submitButton);
  
  submitButton.addEventListener('click', function() {
    var enteredOtp = otpInput.value;
    
    if (enteredOtp === "1234") {
      // Code to submit OTP
      alert("You have successfully loggedin!");

      window.location.href = "../index.html"; //enter the location of homepage
    } else {
      alert("Wrong OTP entered. Please try again.");
    }
  });
});
