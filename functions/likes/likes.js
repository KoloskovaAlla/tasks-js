export const likes = (users) => {
  const length = users.length; 
  switch (length) { 
    case 0: 
      return 'no one likes this';  
    case 1: 
    return `${users[0]} likes this`;
    case 2:     
      return `${users[0]} and ${users[1]} like this`
    case 3:
      return `${users[0]}, ${users[1]} and ${users[2]} like this`
    default:
      return `${users[0]}, ${users[1]} and ${length-2} others like this`
  } 
};

console.log(likes(["Alex", "Jacob", "Mark", "Max", "Alla"]));
console.log(likes(["Kolya", "Alla"]));
console.log(likes(["Kolya"]));
console.log(likes([]));