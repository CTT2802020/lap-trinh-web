//Bài 4: Có bao nhiêu từ có chữ "a".
var arr="toi la mot lap trinh vien da co 2 nam kinh nghiem va day la lan dau tien toi quyet dinh lam app nen toi thieu tu tin"
const myArray = arr.split(" ");
let kyTu="a"
var s=0;
for (var i = 0; i <myArray.length; i++){
    if(kiemtra2(kyTu,myArray[i])){
        s=s+1;
      }
   
}
   console.log(s)







function kiemtra(a, N)  {
    var s=0;
    for (var i = 0; i < N.length; i++) {
        if (N.charAt(i) == a) {
        s=s+1;
        }
    }
    if(s>0){
        return true

    }else{
        return false

    }
}
function kiemtra2(a, N)  {
    for (var i = 0; i < N.length; i++) {
        if (N.charAt(i) == a) {
            return true;
        }
    }
    return false;
}
