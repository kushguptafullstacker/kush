// // // // // ////// TIME TRAVERSAL 

// // // // // ///. UOU HAVE TO LRINT 56789 BUT IN OPPOSITE DIRECTIOON SO YOU HAVE TO PRINT 98765

// // // // // ///4876 % 10

// // // // // let num=56789
// // // // // while(num>0){
// // // // //     let id=num%10
// // // // //     console.log(id);
// // // // //     num=Math.floor(num/10);
// // // // // }


// // // // ///now you jhave too print no.dgit   25896347

// // // // let shbd=25896347;
// // // // let digit=0;
// // // // while(shbd>0){
// // // //     shbd=Math.floor(shbd/10);
// // // //     digit=digit+1;
    
// // // // }
// // // // console.log("no is"|digit);


// // // ///// 7890 print from backdise

// // // // let num=7896;
// // // // while(num>0){
// // // //     let id=num%10
// // // //     console.log(id);
// // // }


// // /*
// // you have tto print 45678 from backdise 

// // */
// // let num=45678;

// // // while(num>0){
// // //     let ld=num%10;
// // //     console.log(ld);
// // //     num=Math.floor(num/10);
// // // }

// // let nume= 2345;
// // let nod=0
// // while(nume>0){
// //     nume=Math.floor(nume/10);
// //     nod++
    
// // }
// // console.log(nod);
  



// // /*
// // nume 2345=ram m nume ki value higg 2345
// // nod =ram m value h 0
// // 2345>0=true
// // nume=2345/10 =234.5
// /+/ nod=nod=1node =0+1 =1
// // 234>0 true  234/10 23.4
// // 23

// // */


// /*

//24567 print from front
// */

let temp=num=24567
let nod=0;
while(temp>0){
    temp=Math.floor(temp/10);
    nod++
}
console.log(nod);

let div=Math.pow(10,nod-1)
console.log(div);

while(num>0){
    let fd=Math.floor(num/div);
    console.log(fd);
    num=num%div
}
console.log(num);
