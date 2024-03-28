function solution(n) {
    
    const intArr = [];
    const answer = [];
    const count = n.toString().length
    
    for(let i = 0; i < count; i++){ 
    
        intArr.push(Number(n.toString()[i]))
    }
    
    for(let i = 0; i < count; i++){ 
    
        answer.push(intArr.pop())
    }
    
    return answer;
}