const clientMatching = (name, clientsList) => {
    const initialsArr = name.split(' ');    
    const surname = initialsArr[0];
    const initials = initialsArr[1];
    
    for (let i = 0; i < clientsList.length; i++) {
        // console.log(surname);
        const clientSurname = clientsList[i].split(' ')[0].toUpperCase();
        // console.log(clientsList[i].toUpperCase());
        if (clientSurname === surname) {
            console.log('Фамилия совпала у ' + clientsList[i]);
        }
    };

};

const name = "IVANOV II";
const clientList = [
  "Petrov Ivan Sergeevich",
  "Ivanov Igor Petrovich",
  "Ivanov Ivan Ivanovich",
  "Sidorov Petr Ivanovich"
];

// console.log(clientMatching(name, clientList));
clientMatching(name, clientList);