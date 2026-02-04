function solution(first,second) {
  let prev; 
 
  while (true) {
    prev = second - first;
   
    if (prev < 0 || second < first || first < prev) {
      return [first, second]
    }
      else {
       second = first;
       first = prev;
      }     
  }
}