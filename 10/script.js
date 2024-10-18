function sumOfSquaresOfOdds(numbers) {
    const oddNumbers = numbers.filter(num => num % 2 !== 0);
    const squaredOdds = oddNumbers.map(num => num ** 2);
    const result = squaredOdds.reduce((acc, curr) => acc + curr, 0);
    return result;
    }
    const numbers = [1, 2, 3, 4, 5];
    const result = sumOfSquaresOfOdds(numbers);
    console.log(result);