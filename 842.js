//Bài 2: Đếm xem có bao nhiêu chuỗi "ie" trong chuỗi đó
var arr="toi la mot lap trinh vien da co 2 nam kinh nghiem va day la lan dau tien toi quyet dinh lam app nen toi thieu tu tin"
function tongtu(){
var s=0
for(var i=0; i <arr.length; i++)
    if (arr[i] == 'i' && arr[i + 1] == 'e'){
        s=s+1;
}
return s;
}
console.log(tongtu())