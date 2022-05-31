//tìm số lớn nhất và vị trí của nó trong mảng.
var arr=[12,2,4,6,13,7,9,3,16,33,1,4,5,13,10]
function max() {
    var max = arr[0];
    var id=0
    for (var i = 0; i < arr.length; i++)
        {
            if (max < arr[i]){
               max = arr[i]; 
               id=i   
            }
        }
    return id;
}
var id=max(arr)
console.log(arr[id],max())

