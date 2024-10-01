//// you have tto print how much time repeat of word 


// function frequency(str,target){
//     let ar=str.split(" ");
//     let count =0;
//     for(let mall of ar){
//        if( mall==target){
//          count++
//        }
//     }return count;
// }
// let ans=frequency("my name is kush kush kush kush","kush")
// console.log(ans);

// //// for knwo that maximum repaet of word is rest on which index 

function firstindex(str,target){
    let arr=str.split(" ");
    let ansidx=-1;
    for(let idx=0; idx<arr.length; idx++){
        if (arr[idx]===target){
           ansidx=idx;
           break;
        }       
    }
    return ansidx
}
let ans2=firstindex("my nmae is kii kush and kush","kush")
console.log(ans2);
