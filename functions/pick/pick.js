const pick = (preferred, blacklisted, options) => {
    let preferredOptions = [];
    let neutralOptions = [];

    const labels = ["A", "B", "C"];

    for (let i = 0; i < 3; i++) {
        const [skill, percentage] = options[i];
        const label = labels[i]; // "A", "B" или "C"
        if (blacklisted.has(skill)) {          
            continue;            // сразу прыгаем к следующей итерации
        }
        if (preferred.has(skill)) {      
            preferredOptions.push({w: skill, p: percentage, l: label})
        }
            else neutralOptions.push({w: skill, p: percentage, l: label});
    }

    if (preferredOptions.length > 0) {
        let maxPercentage = preferredOptions[0].p;
        let label = preferredOptions[0].l;
        for (let i = 1; i < preferredOptions.length; i++) {
            const currentPercentage = preferredOptions[i].p;
            if (currentPercentage > maxPercentage) {
                maxPercentage = currentPercentage;
                label = preferredOptions[i].l
            };
        }
        return label;
    }
        else if (neutralOptions.length > 0) {
            let maxPercentage = neutralOptions[0].p;
            let label = neutralOptions[0].l;
            for (let i = 1; i < neutralOptions.length; i++) {
                const currentPercentage = neutralOptions[i].p;
                if (currentPercentage > maxPercentage) {
                    maxPercentage = currentPercentage;
                    label = neutralOptions[i].l
                };
            }
            return label;

        }

    return "D"; 
}

// console.log(pick(
//   new Set(["attack", "defense"]),
//   new Set(["luck"]),
//   [["luck", 25], ["speed", 20], ["defense", 15]]
// ));

console.log(pick(
  new Set(["attack"]),
  new Set(["luck", "speed", "defense"]),
  [["luck", 30], ["speed", 20], ["defense", 15]]
));