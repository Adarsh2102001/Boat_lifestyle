var cart=JSON.parse(localStorage.getItem("cartItem"))||[];


    if(cart.length===0){
        document.getElementById("parent").textContent="Your Cart Is Empty";
        document.getElementById("parent").style="margin-top=25%"
        var br=document.createElement("br");

        var div=document.createElement("div");
        var imgbox=document.createElement("div");
        imgbox.setAttribute("class", "imgbox")
           
        var img = document.createElement("img");
        img.setAttribute("class", "bag");
        img.src = "https://tse1.mm.bing.net/th?id=OIP.u3v71EZTD8eQf68eMLKqDQHaHa&pid=Api&P=0";
        imgbox.append(img);

        var btn=document.createElement("button");
        btn.textContent="START SHOPPING"
        btn.setAttribute("id","btn")
        div.append(imgbox,btn)
        document.getElementById("parent").append(div)
        document.getElementById("parent").append(br)


        document.getElementById("btn").addEventListener("click",gotToHomePage)
        function gotToHomePage(){
        window.location.href="https://www.boat-lifestyle.com/"
        }
      
    }

    else{
        cart.map(function (el, index) {
            var box = document.createElement("div")
            box.setAttribute("class","productbox")

            var details = document.createElement("div")
            details.setAttribute("class","details");

            var img = document.createElement("img");
            img.src = el.image_url;
            img.setAttribute("class","pic")
            
            var nam1 = document.createElement("h2");
            nam1.textContent = el.name;
            nam1.setAttribute("class","item")

            var nam2 = document.createElement("h4");
            nam2.textContent = el.type;
            nam2.setAttribute("class","prod")
            
            var amount = document.createElement("div");
            amount.setAttribute("class","mrp")

            var prc = document.createElement("h5");
            prc.textContent = `₹ ${el.price}`
            prc.setAttribute("class","pricing")

            var stkprc = document.createElement("s");
            stkprc.textContent = el.stkPrice
            stkprc.setAttribute("class","strike")

            var offer = document.createElement("p");
            offer.textContent = el.off
            offer.setAttribute("class","txt")

            var remove = document.createElement("button");
            remove.innerText="Remove Item";
            remove.setAttribute("class","remove");
            remove.addEventListener("click",function(){
                removeitem(el, index)
            });

            amount.append(prc, stkprc, offer)

            details.append(nam1, nam2, amount,remove)

            box.append(img, details)

            document.querySelector(".productsbox").append(box);
        })
        document.getElementById("add-items").addEventListener("click",additems);
        function additems(){
            window.location.href="https://www.boat-lifestyle.com/"
        }

        var total = cart.reduce(function (acc, currel) {
            return acc + JSON.parse(currel.price);
        }, 0)
        console.log(total)
        document.getElementById("total-price").textContent=total;
         
        document.getElementById("Confirm-Order").addEventListener("click",goToPayment);

        function goToPayment(){
            window.location.href="payment.html";
        }
        

    }
    function removeitem(el,index){
            cart.splice(index,1);
            localStorage.setItem("cartItem",JSON.stringify(cart));
            window.location.reload();
        }