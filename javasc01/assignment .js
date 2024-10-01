/*
Q1. What are entry conrol loops and exit control loops?

ANS-1= Entry control lopp is the loop where condition is executed before the lopp body if the condition is true then the loop work if false then the loop don't run 
for example 

for(let i=2; i<4 ;i++){
    console.log(i);
}

ANS 1 (b part)-exit control loop is the loop where condition executed after the loop body and condition is true or false code will eun one time if its false 

for example 
let y=2
do {
    console.log(y);
    y=y+1

}while(y>4)


Q2. Write the output of the following question:-

         for (let i = 1; i <= 3; i++) { 
         for (let j = 1; j <= 3; j++) { 
         if (i === j) continue; 
         console.log(i + j); } 
        }

ANS-2  
i=1=ram
i<3 true
j=1=ram
1<3 true
1=1 (contuinue)
1+1=2
j=j+1 
j=1+1=2
2<=3(TRUE)
i!=j
1+2=3
j=j+1
j=2+1=3
3<=3 true
i!=j
1+3=4
j=j+1
j=3+1=4
4<=3 false 
i=1+1
i=2
2<=3true
j=1 
1<=3 true 
2!=1 false
2+1=3 
2+2=4(continue)
2+3=5
3+1=4
3+2=5
3+3=6(continue)

Q3-Q3. Write the output of the following question:-
        let found = false; 
        for (let i = 1; i <= 3; i++) { 
        for (let j = 1; j <= 3; j++) { 
        if (i * j > 4) { 
        found = true; break; 
   } 
       console.log(i, j); 
} 
      if (found) break; 
}


ANS- i=1
1<=3(true)
j=1=ram
1<=3 true
1*1=1!>4(falsw)
1,1
j=1+1=2
2<=3 true
1*2=2>4 (false)
(1,2)
j=2+1=3
3<=3 (true)
1*3=3>4(false)
(1 , 3)
j=J+1
j=3+1=4
4<=3 false 
i=1+1=2
j=1 
1<=3 true
2,1
2,2
2,3 (break loop se bhaar fekdega )
3,1
3,2(loop se bhaar fekdega )
3,3 (loop se bhaar fekdega )

final output is 
1,1
(1,2)
(1 ,3)
2,1
2,2


Q4. Write the output of the following question:-
let pattern = ''; 
 for (let i = 1; i <= 5; i++) { 
for (let j = 1; j <= i; j++) {
 pattern += '*';
 } 
pattern += '\n';
 }
 console.log(pattern);
 
 ANS=let i=1
pattern=" ";
while(i<=5){
 let j=1;
 while(j<=i){
    pattern+="*";
     j++
 }
 pattern += '\n';
  i++
  
}
console.log(pattern);
*
**
***
****
*****
Q5. 
* * * * * 
   * * * * 
      * * *
         * * 
            *

  for(let i=1;i<=5;i++){
    for(sp=1 ;sp<=i;sp++){
   process.stdout.write(" ")
   }
    for(st=5;st>=i;st--){
     process.stdout.write("*")
    }
    console.log();
  }

q5-Write a js Program for finding Prime Numbers between 1-100.


ANS=function findPrime(n){
for(let i=2;i<=n;i++){

    if(i%2!=0&&i%3!=0&&i%5!=0&&i%7!=0){
        console.log(i)
    }
    else if(i==2||1==3||i==5||i==7){
        console.log(i);
    }
    else{
        continue;
    }
}
}
findPrime(100)

// Ques no.7
// anybase to anybase


function anybasetodecimal(num,base){
    let ans=0;
    let pow=1;
    while(num>0){
        let rem=num%10;
        num=Math.floor(num/10);
        rem=rem*pow;
        ans=ans+rem;
        pow=pow*base;
    }
    return ans;
}
function decimaltoanybase(num,base){
    let ans=0;
    let pow=1;
    while(num>0){
        let rem=num%base;
        num=Math.floor(num/base);
        rem=rem*pow;
        ans=ans+rem;
        pow=pow*10;
    }
    return ans;
}
function anybasetoanybase(num1,base1,base2){
    let number=anybasetodecimal(num1,base1);
    let finaloutput=decimaltoanybase(number,base2);
    
    console.log(finaloutput);
    
}
anybasetoanybase(54,8,2);

// ques no.8
// anybase addition
function anybbaseaddition(base,num1,num2,) {
    let ans=0;
    let carry=0;
    let pow=1;

    while (num1>0 || num2>0 || carry>0) {
        let number1=num1%10;
        num1=Math.floor(num1/10);
        let number2=num2%10;
        num2=Math.floor(num2/10);
            let digit=number1+number2+carry;
            Newdigit=digit%base
            carry=Math.floor(digit/base);
            ans+=Newdigit*pow;
            pow*=10;
        
    }
    return ans;
}
let add=anybbaseaddition(8,400,20);
console.log(add);
*/

