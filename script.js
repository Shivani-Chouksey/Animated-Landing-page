var menu=document.querySelector("#menu img");
var fs=document.querySelector("#fs");
flag =0

menu.addEventListener("click",function(){

    if(flag===0){
        fs.style.top="0%"
        flag=1
    }
    else{
        fs.style.top="-100%"
        flag=0
        setTimeout(function(){
            fs.style.opacity="0"
        },200)
    }
   
})

document.querySelector("#projectlink").addEventListener("click",function(){
    document.querySelector("#project").style.opacity =1;
    document.querySelector("#front").style.opacity=0
})



// project****************

var clutter =""

function encryption(){
    document.querySelector("#encrypt-btn").addEventListener("click",function(){

        // getting a input

       var input =  document.getElementById("txtmsg").value;
       console.log(input);

    //    geeting a password
       var password =  document.getElementById("password").value;
       console.log(password);

       const str = input.split("")
       console.log(str)
       str.forEach(element => {
            clutter += `&#128${element.charCodeAt()}`
       });
       console.log(clutter)

    //storing it in a #result div
       document.querySelector("#result").innerHTML = clutter;

       var dataarr = [];
       if(JSON.parse(localStorage.getItem('data1'))){
        dataarr = JSON.parse(localStorage.getItem('data1'))
        dataarr.push ({"pass":password,"input":input,clutter})
       }else{
        dataarr =[{"pass":password,"input":input,clutter}]
       }
      

       localStorage.setItem('data1',JSON.stringify(dataarr))


    })
}
encryption();
 
 function decryption(){
    document.querySelector("#decrypt-btn").addEventListener("click",function(){
        var clutter2 = "";
    
        // getting an given emoji msg
        var input2 = document.querySelector("#emojimsg").value

        // getting an given final password
        var pass2 = document.querySelector("#finalpassword").value

        var user = JSON.parse(localStorage.getItem('data1'))
        console.log(user)

        var str2 = input2.split(" ")
        str2.forEach(element =>{
            clutter2 += `&#${element.codepointAt(0)}`
        })
        console.log("clutter2")
        var found;
        for(let i of user){
            if(i.clutter == clutter2){
                found = i
                console.log(i)
            }
        }

        if(found.clutter ===clutter2){
            document.querySelector("#result").style.display ="block"
            document.querySelector("#result").style.color ="#eee"

            document.querySelector("#result").innerHTML =found.input
        }
        else{
            document.querySelector("#result").style.display ="block"
            document.querySelector("#result").style.color ="red"
            document.querySelector("#result").innerHTML ="Wrong password"
        }


    })
 }
 
 decryption();
 
 
 
 
 
 function btnClicking(){
 document.querySelector("#dec-btn").addEventListener("click",function(){
document.querySelector("#decryption").style.display ="block";
document.querySelector("#encryption").style.display ="none";
document.querySelector("#dec-btn").style.backgroundColor ="#333";
document.querySelector("#enc-btn").style.backgroundColor ="#222";
document.querySelector("#project>h1 span img").style.rotate = "180deg";
document.querySelector("#result").style.display = "none"
 })
 document.querySelector("#enc-btn").addEventListener("click",function(){
document.querySelector("#encryption").style.display ="block";
document.querySelector("#decryption").style.display ="none";
document.querySelector("#enc-btn").style.backgroundColor ="#333";
document.querySelector("#dec-btn").style.backgroundColor ="#222";
document.querySelector("#project>h1 span img").style.rotate = "90deg";
document.querySelector("#result").style.display = "none"
 })
document.querySelector("#encrypt-btn").addEventListener("click",function(){
    document.querySelector("#result").style.display = "block";
})
document.querySelector("#decrypt-btn").addEventListener("click",function(){
    document.querySelector("#result").style.display = "block";
})

 }
 btnClicking()

