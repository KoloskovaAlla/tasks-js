const clientMatching = (name, clientsList) => {
    const initialsArr = name.split(' ');    
    const surname = initialsArr[0];
    const initials = initialsArr[1];
    console.log('Ищем в списке ' + name);
    let fullName;
    
    for (let i = 0; i < clientsList.length; i++) {        
        const clientsListSurname = clientsList[i].split(' ')[0].toUpperCase();
        const clientsListName = clientsList[i].split(' ')[1];
        const clientsListPatronymic = clientsList[i].split(' ')[2];        
        if (clientsListSurname === surname) {
            console.log('Фамилия совпала у ' + clientsList[i]);
            if (clientsListName[0] === initials[0]) {
                console.log('Первая буква имени совпадает у ' + clientsList[i]);
                if (clientsListPatronymic[0] === initials[0]) {
                    console.log('Инициалы совпали у '+ clientsList[i])
                    fullName = clientList[i];
                    break;
                }
            }
        }
        console.log('---------------')
    };
    console.log('-----------------')
    console.log('Искомый клиент - ' + fullName);

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