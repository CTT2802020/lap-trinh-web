//Cho 1 mảng là N gồm các số nguyên. Áp dụng cho bài 2,3,4,5 VD như: Mảng [9,5,4,3,7,2,2,5,11,51,38,37,53]
//Bài 2: Hãy tính tổng các số lẻ. Nếu mảng như VD trên thì tổng = 9+5+3+7+5+11+51+37+53 = 181.
var arr= [9,5,4,3,7,2,2,5,11,51,38,37,53];
function tong() { 
    var S = 0 ;
    for (var i = 0; i<arr.length;  i++ )
    {
        if (arr[i] % 2 != 0)
        {
            S +=arr[i];
        }
    }
    return S
}
console.log(tong())






















999





