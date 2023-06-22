export const drinks = (age) => {
  let person;
  if (age < 14) person = 'child';
  if (age >=14 && age < 18) person = 'teens';
  if (age >= 18 && age < 21) person = 'young'; 
  if (age >= 18) person = 'adult'; 

  switch (person) {
    case 'child':
      return 'drink toddy';    
    case 'teens':
      return 'drink coke';
    case 'young':
      return 'drink beer';
    default:
      return 'drink whisky';
  };
};
