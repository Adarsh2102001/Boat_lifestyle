document.getElementById("otp-form").addEventListener("submit",verify);
function verify(){
    event.preventDefault();
    var otp=document.getElementById("Otp").value;
    if(otp=="1234"){
        alert("Payment successfull");
        window.location.href="https://www.boat-lifestyle.com/collections/true-wireless-earbuds";
    }
    else{
        alert("Error : Invalid OTP");
    }
}