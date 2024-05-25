
// function num() {
//    let a = document.getElementById("a1").value
//     console.log(a);
   
// }
// function num1() {
   
//      let b = document.getElementById("a2").value
//      console.log(b);
     
//  }

 function subTotal1(price1, quantity1) {
    price1= document.getElementById("p1").innerText="50";
    
   quantity1 = document.getElementById("a1").value;
   if (isNaN(quantity1) || quantity1 < 1 ) {
    quantity1 = "Input not valid";
  } else {
    
   let total1 = price1*quantity1;
   document.getElementById("q1").innerText =total1;
   
  }
  

    
//return total1;

  }
  function subTotal2(price2, quantity2) {
    
     price2 = document.getElementById("p2").innerText="55";
    quantity2 = document.getElementById("a2").value;
    if (isNaN(quantity2) || quantity2 < 0 ) {
      quantity2 = "Input not valid";
    }
    else{
      let total2 = price2*quantity2;
      document.getElementById("q2").innerText = total2;
    }
   
    
  
//return total2;

  }

   function allSubtotal(t1,t2) {
    // t1=subTotal1()
    // t2=subTotal2()
    
    // let allTotal = t1 + t2
    // document.getElementById("q3").innerText=allTotal;

   t1 = document.getElementById("q1").innerText;
   t2 = document.getElementById("q2").innerText;

//    console.log(t1);
// console.log(t2);
   let allTotal =parseInt(t1) + parseInt(t2)
     document.getElementById("q3").value=allTotal;
    
    
        
       }

       function delete1(){
        document.getElementById("p1").innerText=" ";
        document.getElementById("q1").innerText = " ";
        quantity2 = document.getElementById("a1").value= " ";
        document.getElementById("q3").value= " ";
        
             
       }
       function delete2(){
        document.getElementById("p2").innerText=" ";
        document.getElementById("q2").innerText = " "; 
        quantity2 = document.getElementById("a2").value = " ";
        document.getElementById("q3").value = " ";
        
             
       }
    
  