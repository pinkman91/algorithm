function solution(n) {
    
    const intList = [];
    let answer = 0;
    for(let i = 1; i<=n; i++){
        if(n % i === 0){
            intList.push(i)
        }
    }
        
    for(const int of intList){
        answer += int
    }
    return answer;
}