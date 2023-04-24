document.getElementById("otp-form").addEventListener("submit",verify);
function verify(){
    event.preventDefault();
    var otp=document.getElementById("Otp").value;
    if(otp=="1234"){
        alert("Payment successfull");
        window.location.href="../index.html";
    }
    else{
        alert("Error : Invalid OTP");
    }
}