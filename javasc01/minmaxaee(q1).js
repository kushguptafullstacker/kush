//max?
//min??
//spam=max-min
let arr=[2,3,5,7,9,34,23,]
let max=arr[0];
let min=arr[0];

for(let i=1;i<arr.length;i++){
 if(arr[i]>max){
    max=arr[i]
 }
 if(arr[i]<min){
    min=arr[i]
 }
}
console.log(max,min);
console.log(max-min);