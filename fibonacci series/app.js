var  arr = [0, 1];
while ((arr[arr.length-1]< 21)){
    
    arr.push(arr[arr.length-2] + (arr[arr.length - 1]))
}
console.log(arr);
