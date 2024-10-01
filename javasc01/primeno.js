
for(let num=2;num<=100;num++){
let nof=0 
for(let base=2;base*base<num;base++)
  if(num%base===0){
    nof=nof+1;
    break;
  }
}if(nof===0){
  console.log("prime",num);
}
         
