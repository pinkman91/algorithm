function solution(numbers, n) {
    var answer = 0;
    let sum = 0;
    
    for(let i =0; i<numbers.length; i++){
        if(sum <= n){
            sum += numbers[i]    
        }
        
    }
    return sum;
}