/*
decimal to any base 
(2224)10=()2
*/

function decimaltoanybase(num, base){

let pow=1;
let ans=0;
while(num>0){
    let rem=num%base;
    num=Math.floor(num/base);
    rem=rem*pow;
    ans=ans+rem;
    pow=pow*10
}   
  return ans;
}



function anybasetodecimal(num,base){
    let ans=0;
    let pow=1;
    while(num>0){
        let rem=num%10;
        num=Math.floor(num/10);
        rem=rem*pow
        ans=ans+rem;
        pow=pow*base

    }return ans;
}

/// function == anybae to anybase 

function anybasetoanybase(num1,base1,base2){
     
    let decimalnumber=anybasetodecimal(num1 ,base1);
    let finalconvertnumber=decimaltoanybase(decimalnumber , base2)
        console.log(finalconvertnumber);
    

}
anybasetoanybase(67,8,2)       










