////// FUNCTION STATEMNET EXPRESSION , EXPRESSION , ANONUMOUS ,RETURN ,WITH PARTENTS

/// STATEMENT 

function saynyname(){
    console.log("hii user ");
}
saynyname();
saynyname();
saynyname();
saynyname();
saynyname();
saynyname();
saynyname();
saynyname();

/////expression
let hello=function hello(){
    console.log("shut up u mopther fucker ");
}
hello();
///// anonymoius 

let priya=function (){
  console.log("hii pria show your ass");
}
priya();


///rv=all functiogive some thing return 
let ooo=function (){
    console.log("kush");
}
let uu=ooo();
console.log(uu);

////paramter

function khushi(name , age , gender , ismarried){
console.log("my name is",name+ " "+"my age is ",+age+ " "+"what is your gender",gender);
}
khushi("khushi",27 ,"female");


//// how return function work 

function saytu(){
    console.log("kush");
    return function(){
         console.log("radha");
         return"kush";}
    console.log("kiiiii");
}
let rv=saytu();
console.log(rv());

///// hollow gram 
 for(row=1;row<=10;row++){
    for(let col=1;col<=10;col++){
        if((row>1 && row<10) && (col>1 && col<10)){
            process.stdout.write(" ");
        }
    else {
        process.stdout.write("*")

    }
}console.log();
}


function hollowrecatngle (n){
for(row=1;row<=n;row++){
    for(let col=1;col<=n;col++){
        if((row>1 && row<n) && (col>1 && col<n)){
            process.stdout.write(" ");
        }
    else {
        process.stdout.write("*")

    }
}console.log();
}
}
hollowrecatngle(20);