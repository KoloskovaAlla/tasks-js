const friendsMatching = (data) => {
    const [names, interests] = data;
    // console.log(names);
    // console.log(interests);
    let pairs = [];

    for (let i = 0; i < names.length; i++) {
        for (let j = i + 1; j < names.length; j++) {
            const friend1 = names[i];
            const interests1 = interests[i];
            // console.log(friend1);
            // console.log(interests1)

            const friend2 = names[j];
            const interests2 = interests[j];
            // console.log(friend2);
            // console.log(interests2);
            // console.log('--------')

            

            for (let k = 0; k < interests1.length; k++) {
                for (let l = 0; l < interests2.length; l++ ) {
                    // console.log(interests1[k] + ' ' + interests2[l])
                   
                    if (interests1[k] === interests2 [l]) {
                        pairs.push([friend1, friend2]);
                      
                    };
                }
            }
            console.log('--------------');
        }
    }

    console.log(pairs);
    // [['Аня' 'Боря'], ['Аня', 'Ваня'], ['Аня', 'Галя'], ['Боря', 'Галя']]
};

// Тестирование
const testData = [
    ['Аня', 'Боря', 'Ваня', 'Галя'],
    [
        ['кино', 'музыка'], 
        ['спорт', 'кино'], 
        ['музыка', 'игры'], 
        ['спорт', 'кино']
    ]
];

// console.log('Результат:', friendsMatching(testData));
friendsMatching(testData);