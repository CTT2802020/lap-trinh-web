var arr= [9,5,4,3,7,2,2,5,11,51,38,37,53]; 
function max() {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++)
        {
            if (max < arr[i])
               max = arr[i];    
        }
    return max;
}
console.log(max())