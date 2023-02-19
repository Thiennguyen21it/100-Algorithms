//387. First Unique Character in a String

var firstUniqChar = function (s) {
  const map = {}; // tao mot map de luu tru so lan xuat hien cua tung ky tu
  for( let i = 0; i < s.length ; i++) {
     if(map(s[i])){  //neu ky tu da tung xuat hien thi tang so lan xuat hien len 1
          map(s[i])++;
     }else {
          map(s[i]) = 1; //neu ky tu chua tung xuat hien thi set so lan xuat hien bang 1
     }
  }
     for(let i = 0; i < s.length; i++) {
          if(map(s[i])===1){
               return i;
          }
     }
     return -1;
};
