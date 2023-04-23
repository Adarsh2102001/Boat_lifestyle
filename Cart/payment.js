document.getElementById("Payment").addEventListener("submit",validate);
    function validate(){
        event.preventDefault();
       var card=document.getElementById("card").value;
       var cvv=document.getElementById("cvv").value;
       
       if(card.length==0){
        alert("Please enter the valid details");
       }
       else if(card.length<12||card.length>12){
        alert("Error : Invalid Card Details")
       }
       else if(cvv.length<3||cvv.length>3||cvv.length==0){
        alert("Error : Invalid Card Details")
       }
       else{
        alert("OTP sent to registerd mobile number");
        window.location.href="otp.html"
       }
    }