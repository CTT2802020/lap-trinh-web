//Bài 3: Chuỗi trên có bao nhiêu từ. VD: "anh em oi" có 3 từ
var arr="toi la mot lap trinh vien da co 2 nam kinh nghiem va day la lan dau tien toi quyet dinh lam app nen toi thieu tu tin"
function tongtu(){
var s=1
for(var i=0; i <arr.length; i++)
    if (arr[i] == ' ' && arr[i + 1] != ' '){
        s=s+1;
}
return s;
}
console.log(tongtu())