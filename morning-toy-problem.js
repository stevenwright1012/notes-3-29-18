function camelCase(str){
    var arr = str.toLowerCase().split("")
    arr;
    for(let i=arr.length -1 ; i >= 0; i--){
        if (arr[i] === '-' || arr[i] === '_'){
            if(i < arr.length -1)
           arr[i+1] = arr[i+1].toUpperCase();
            arr.splice(i, 1);
        }
    }
    return arr.join('');
}

console.log(camelCase("Hell----------WORl-----------------"));
