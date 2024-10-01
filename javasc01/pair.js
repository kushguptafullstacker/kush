// //// pair ??
// let arr=[1,2,3,4,5,6,7,8];
// target=6;

// for(i=0;i<arr.length;i++){
//     for(j=1;j<arr.length;j++){
//         if(arr[i]+arr[j]==target){
//             console.log(arr[i],arr[j]);
//         }
//     }
// }
// sorted 


//acesnding 
// for(let i =0; i<arr.length;i++){
//     for(j=i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             let temp=arr[i];
//             arr[i]=arr[j]
//             arr[j]=temp
//         }
//         }
//     }console.log(arr);
// let arr=[3,5,2,1,5,6,78,8,54,3];
   
//   let max=arr[0];
//   let min=arr[0];

//   for(i=1;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i]
//     }
//     if(arr[i]<min){
//         min=arr[i]
//     }
//   }console.log(max,min);
//   console.log(max-min);

  let arr=[3,5,2,1,5,6,78,8,54,3];
  target=0;
 function saymynamer(arr,target){
 for(i=0;i<arr.length;i++){
   if(arr[i]==target){
       return true
   }
 }  return -1
}
let rv=saymynamer(arr,target)
console.log(rv)
;