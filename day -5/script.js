// 1
function data() {


    let a = document.getElementById("year").value;
    
    if (a <= 10000) {
        var ans = (a * 5) / 100;
        document.getElementById("minu").innerText = ans;

    } else if (a > 10001 && a <= 50000) {
        var result = (a * 10) / 100
        document.getElementById("minu").innerText = result

    } else if (a > 50001 && a <= 100000) {
        var ans1 = (a * 15) / 100
        document.getElementById("minu").innerText = ans1
    }
    else if (a > 100000) {
        var ans2 = (a * 20) / 100
        document.getElementById("minu").innerText = ans2

    }
    else {
        document.getElementById("minu").innerText = "dubbo"
    }



}
// 3

function data1() {
    let a = document.getElementById("red").value;

    if (a <= 0) {
        document.getElementById("misu").innerText = "Anicent"

    } else if (a > 1 && a <= 1500) {
        document.getElementById("misu").innerText = "Medieval"
    } else if (a > 1501 && a <= 2024) {
        document.getElementById("misu").innerText = "Modern"
    }
    else if (a > 2024) {
        document.getElementById("misu").innerText = "Future"
    }
}
// 4

function data2() {
    let a = document.getElementById("white").value;

    if (a <= 1) {
        document.getElementById("piyu").innerText = "Infant"

    } else if (a > 1 && a <= 12) {
        document.getElementById("piyu").innerText = "child"
    } else if (a > 13 && a <= 19) {
        document.getElementById("piyu").innerText = "Teenager"
    }
    else if (a > 20 && a<= 64) {
        document.getElementById("piyu").innerText = "Adult"
    }
    else if(a >65) {
          document.getElementById("piyu").innerText = "Senior Citizen"
    }
}

// 5


function data3() {


    let a = document.getElementById("heer").value;
    
    if (a <= 100) {
       
        document.getElementById("bag").innerText = ans;

    } else if (a > 100 && a <= 500) {
        var result = (a * 5) / 100
        document.getElementById("bag").innerText = result

    } else if (a > 500 && a <= 1000) {
        var ans1 = (a * 10) / 100
        document.getElementById("bag").innerText = ans1
    }
    else if (a > 1000) {
        var ans2 = (a * 15) / 100
        document.getElementById("bag").innerText = ans2

    }
    else {
        document.getElementById("bag").innerText = "dubbo"
    }



}
// 2
 function data4(){

    let a= document.getElementById("unit").value ;
    let ut;

    if(a<=100){
         ut=a*0.1;
        document.getElementById("text").innerText ="electricity bill is $" + ut 
    }
    else if(a>100 && a<=200){
        ut=a*0.15;
       document.getElementById("text").innerText ="electricity bill is $" + ut 
   }
   else if(a>200 && a<=300){
    ut=a*0.2;
   document.getElementById("text").innerText ="electricity bill is $" + ut 
  }
  if(a>300){
    ut=a*0.25;
   document.getElementById("text").innerText ="electricity bill is $" + ut 
  }
}

// 6

function cate() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    let category;

    if (temperature >= 30) {
        category = "Hot";
    } else if (temperature >= 15 && temperature < 30) {
        category = "Moderate";
    } else {
        category = "Cold";
    }

    document.getElementById('result').innerText = `The temperature is ${category}.`;
}