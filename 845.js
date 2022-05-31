var arr="toi la mot lap trinh vien da co 2 nam kinh nghiem va day la lan dau tien toi quyet dinh lam app nen toi thieu tu tin"
const a = arr.split(" ");
var b=[]
for (var i = 0; i <a.length; i++){
    b[i]=0
    for (var j = 0; j<a.length; j++){
        if (a[j]==a[i])
        b[i]+=1

    }
}
function max(arr) {
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
var id=max(b)
console.log(b[id],a[id])




    


  






















