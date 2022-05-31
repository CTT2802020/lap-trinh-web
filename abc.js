//Bài 2: Cho mảng các số nguyên N , viết hàm kiểm tra xem trong mảng đó có bao nhiêu số x xuất hiện và console số lần đó ra. 
//Kiểm thử với N = [23,17,919,723,182,19,93,17,44,55,28,67,17,46] và x = 17
var number= [17,17,919,723,182,19,17,17,723,55,28,67,17,46,17];
var dem ={ };
for (var i = 0, j= number.length;i<j; i++) {
   dem[number[i]] = (dem[number[i]] || 0) + 1;
}       
console.log(dem[17]); 
