//Bài 6: Từ nào có nhiều chữ nhất trong chuỗi trên và số chữ của từ đó là bao nhiêu. 
//VD: "anh em oi" thì từ anh có 3 chữ(a,n,h) là nhiều nhất
var arr="toi la mot lap trinh vien da co 2 nam kinh nghiem va day la lan dau tien toi quyet dinh lam app nen toi thieu tu tin"
const myArray = arr.split(" ");
var s ="";
for (var i = 0; i <myArray.length; i++){
    if(myArray[i].length>s.length){
        s=myArray[i]
    }
}
console.log(s,s.length)