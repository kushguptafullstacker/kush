console.log("gello worls");

///// write reverse my name is kush ,,kush is name my 

function reverse(str){
    let arr=str.split(" ");
    let st=0;
    let end=arr.length-1;
    while(st<end){
        temp=arr[st];
      arr[st]=arr[end]
      arr[end]=temp
      st++
      end--;

    }
    console.log(arr);
}
reverse("my name is kush")