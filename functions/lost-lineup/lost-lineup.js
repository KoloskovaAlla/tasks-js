const findLineup = (distances) => {
  
    const distancesWithIndexes = distances.map((distance, index) => {
        return {distance: distance, index: index + 1}
    })
    distancesWithIndexes.sort((a, b) => {return a.distance - b.distance})

    for (let i = 0; i < distancesWithIndexes.length; i++) {
        if (distancesWithIndexes[i].distance !== i) return [];
    }
  
    return distancesWithIndexes.map((kit) => {return kit.index});
}

console.log(findLineup([1, 2, 0])) //[3, 1, 2]   
console.log(findLineup([1, 4, 2, 6, 8, 0, 5, 7, 3])) //[6, 1, 3, 9, 2, 7, 4, 8, 5]   
console.log(findLineup([0])) //[1]   
console.log(findLineup([1])) //[]   

