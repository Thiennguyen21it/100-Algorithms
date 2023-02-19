//383 . Ransome Note

var canConstruct = function (ransomNote, magazine) {
  const charCount = {};
  for (let i = 0; i < magazine.length; i++) {
    const c = magazine[i];
    charCount[c] = (charCount[c] || 0) + 1;
  }
  for (let i = 0; i < ransomNote.length; i++) {
    const c = ransomNote[i];
    if (!charCount[c] || charCount[c] === 0) {
      return false;
    }
    charCount[c]--;
  }
  return true;
};
//cach 2
//    let map = new Map()
//    for(let i = 0; i < magazine.length ; i++) {
//        if(map.has(magazine[i])) {
//            // neu map co phan tu magazine i thi tang so lan xuat hien len 1
//            map.set(magazine[i],map.get(magazine[i])+1)
//        }else {
//            //neu letter khong o trong map
//            //them no vao map va set co lan xuat hien bang 1
//            map.set(magazine[i],1)
//        }
//    }
//    for(let i = 0; i < ransomNote.length; i++) {
//        //neu letter khong o trong map hoac so lan xuat hien bang 0 retrun false
//        if(!map.has(ransomNote[i]) || map.get(ransomNote[i]) === 0 ){
//            return false
//        }
//        //giam so lan xuat hien cua letter
//        map.set(ransomNote[i],map.get(ransomNote[i])-1)
//    }
//    return true
