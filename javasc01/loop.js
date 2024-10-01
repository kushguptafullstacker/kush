//. form 0 to 100///print all even no,

for(let i=1;i<=100;i++){
    if(i%2===0){
        console.log(i);
    }
}

let gamenum=25;
let myfun=prompt("hiii guess the no,. so well update ");
while(gamenum!=myfun){
    prompt("sorry you have too try again");
}
console.log("conratulation i found you");

///// for off loop
let str="tonyshark";
let size=0;
for(let i of str){
    console.log(i);
    size++
}
console.log("size =",size);

///for in loop 

let student ={
    name:"kush",
    age:24,
    cgpa:9,
}
for(let i in student){
    console.log(i,student[i]);
}
/*
conditional statement 
if 
 else
else if
*/

/*
ternary operator
condition ? -true
condition-:false    

*/
///// no.is multiple of five or not 
let num=prompt("enter a number we choose ode even for yu      ");
if(num%5==0){
    console.log(num,"yes its no. is even");
}
else{
    console.log("sorry this is odd");
}
let score=65;
let grade="grade";  
if(score>90 && score<=100){
    console.log("gradea");
}
else if(score>70 && score<=89){
    console.log("grade b ");
}
else if(score>60 && score<=69){
    console.log(grade,"c");

}else if(score>50 && score<=59){
    console.log("d");

}
else if(score>0 && score<=49){
    console.log("f");
}


//


