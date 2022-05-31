//Bài 3: Hãy đếm xem có bao nhiêu số nguyên tố trong mảng.  Nếu mảng như VD trên thì có 5,3,7,2,2,11,37,53 tổng cộng 8 số
var arr= [9,5,4,3,7,2,2,5,11,51,38,37,53];

function tong() { 
    var s = 0 ;
    for (var i = 0; i<arr.length;i++){
       if(snt(arr[i])){
         s=s+1;
       }
    }
    return s
}
    console.log(tong())
   
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
    
  
  
    
     
  
  
  
    
  
  
  
  
  
  
  
  
  
  