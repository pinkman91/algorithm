function solution(number, n, m) {
    var answer = 0;
    const result1 = number % n
    const result2 = number % m
    
    return result1 === 0 && result2 ===0 ? 1 : 0
}