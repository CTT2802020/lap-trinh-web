//Bài 1: Viết hàm kiểm tra 1 số bất kỳ có phải là số nguyên tố hay không. 
//Khái niệm Số nguyên tố: là số lớn hơn 1 và chỉ chia hết cho 1 và chính nó, vd như: 2,3,5,7,11,13,17,23,...là số nguyên tố
function snt(n) {
    if (n === 2) {
      return true;
    } else if (n > 1) {
      for (var i = 2; i < n; i++) {
        if (n % i == 0) {
          return  false;
        }
      }
      return true;
    } else {
      return false;
    }
   
  }
console.log(snt(5));


  