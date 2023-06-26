export const drinks = (age) => { 
  if (age < 14) return 'drink toddy'; 
  if (age >=14 && age < 18)  return 'drink coke';
  if (age >= 18 && age < 21) return 'drink beer';
  if (age >= 21) return 'drink whisky'; 
};

console.log(drinks(7))
