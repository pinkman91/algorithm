function solution(arr) {
    
    const sumArr = arr.reduce((acc,curr) => acc + curr)
    
    return sumArr / arr.length
     
}