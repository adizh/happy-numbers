let allNumRange = (targetNum, current_sum, start, result, finalOutput)=> {
    if (current_sum === targetNum) {
        finalOutput.push(result.slice());
    }
    for (let i = start; i < targetNum; i++) {
        let tempSum = current_sum + i;
        if (tempSum <= targetNum) {
            result.push(i);
            allNumRange(targetNum, tempSum, i, result, finalOutput);
            result.pop();
        } else {
            return;
        }
    }
};

let allSum = (target) =>{
    let finalOutput = [];
    let result = [];
    allNumRange(target, 0, 1, result, finalOutput);
    return finalOutput;
};

const findAll = (n, k)=>{
    let result =  allSum(n)
    let  allNumbers = result
    .filter((subArr)=>subArr.length===k)
    .filter((subArr)=>subArr.join('').length === k)
    let sorted = allNumbers.map((arr)=>+arr.join(''))
 
if(sorted.length > 0){
   let  [min, max] =  [sorted[0], sorted[sorted.length -1]]  
   return [allNumbers.length, min, max ]
}
return [0]
}
console.log(findAll(28 ,3))
console.log(findAll(27 ,3))
console.log(findAll(10 ,3))









