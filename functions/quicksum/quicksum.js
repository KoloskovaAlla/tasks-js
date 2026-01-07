const quicksum = (packet) => {
    let result = 0;
    for (let i = 0; i < packet.length; i++) {   
        const charCode = packet.charCodeAt(i)        
        if (packet[i] === ' ') continue;
            else if (charCode < 65 || charCode > 90) return 0;
                else result += (i + 1) *  (packet.charCodeAt(i) - 65 + 1)

    }
    return result;    
}

// ACM
console.log(quicksum('ACM')) // 46
console.log(quicksum('A C M')) // 75
console.log(quicksum('MID CENTRAL')) // 650
console.log(quicksum('???')) // 0
console.log(quicksum('234 234 WEF ASDF AAA 554211 ????')) // 0

