export const powersOfTwo = (n) => {
  const arr = []
  
  for (let i=0; i<=n; i++) {  
    console.log(i)
    arr.push(Math.pow(2, i))
  };
  console.log(arr)
  return arr
}

powersOfTwo(2)
