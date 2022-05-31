//Bài 1: Đếm xem có bao nhiêu chữ "i" trong chuỗi đó.
var arr="toi la mot lap trinh vien da co 2 nam kinh nghiem va  day la lan dau tien toi quyet dinh lam app nen toi thieu tu tin"
let kyTu = 'i';
function tong(){
    var s=0;
    for (var i = 0; i < arr.length; i++) {
        if (arr.charAt(i) == kyTu) {
        s=s+1;
    }
}
return s;
}
console.log(tong())