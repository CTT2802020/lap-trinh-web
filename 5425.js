var arr= [9,5,4,3,7,2,2,5,11,51,38,37,53]; 
function min() {
    var min = arr[0];
    for (var i = 0; i < arr.length; i++)
        {
            if (min > arr[i])
                min = arr[i];  
        }
    return min;
}
console.log(min())