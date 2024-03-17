module.exports = function solution(config) {
    const variables = {};    
   
    const calculate = (formula) => {
        const operations = formula.split(' ');
        
        for (let i = 0; i < operations.length; i++) {
            const operation = operations[i].trim();
            if (operation.startsWith('$')) {
                const varName = operation.substring(1);
                if (isNaN(variables[varName])) {
                    return undefined;
                }
                operations[i] = variables[varName];
            }
        }
        
        try {
            return eval(operations.join(''));
        } catch (error) {
            return undefined;
        }
    };
    
    config.vars.forEach((variable) => {
        if (variable.formula) {
            const result = calculate(config.calculations.find(calc => calc.id === variable.formula).formula);
            if (result === undefined) {
                return "impossible";
            }
            variables[variable.id] = result;
        } else if (variable.value !== undefined) {
            variables[variable.id] = variable.value;
        }
    });
    
    return variables;
}