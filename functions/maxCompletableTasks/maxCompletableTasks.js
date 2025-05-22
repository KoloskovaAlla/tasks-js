const maxCompletableTasks = (nums) => {
    nums.sort((a, b) => a - b);
    const WORK_DAY_MINUTES = 480;
    let completedTasks = 0; 
    let spentMinutes = 0;
 
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + spentMinutes <= WORK_DAY_MINUTES) {
            completedTasks++;
            spentMinutes += nums[i];
            // console.log(spentMinutes);
        }    
    }

    return completedTasks;
};

// console.log(maxCompletableTasks([60, 120, 180, 90, 30])) //4
// console.log(maxCompletableTasks([240, 240])) //2
// console.log(maxCompletableTasks([480])) //1
// console.log(maxCompletableTasks([500])) //0
// console.log(maxCompletableTasks([1, 1, 1, 1, 1, 1, 1, 1, 1, 1],)) //10
// console.log(maxCompletableTasks([500, 600, 700])) //0
// console.log(maxCompletableTasks([60, 60, 60, 60, 60, 60, 60, 60])) //8
// console.log(maxCompletableTasks([10, 480, 20, 30])) //3
// console.log(maxCompletableTasks([100, 150, 200, 250, 300])) //3
// console.log(maxCompletableTasks(Array(1000).fill(1))) //480
// console.log(maxCompletableTasks([1])) //1
// console.log(maxCompletableTasks([100, 100, 100, 100, 90])) //4
// console.log(maxCompletableTasks([100, 100, 100, 100, 80])) //5
