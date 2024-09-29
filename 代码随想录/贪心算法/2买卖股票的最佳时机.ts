const maxProfit = (prices: number[]) => {
    for(let i = 0; i < 5; i++) {
        console.log(i);
    }
    let minRe = Infinity;
    let result = 0;
    for (let i = 0; i < prices.length; i++) {
        minRe = Math.min(minRe, prices[i]);
        result = Math.max(result, prices[i] - minRe);
    }
    return result;
};

console.log(maxProfit([7,1,5,3,6,4]));