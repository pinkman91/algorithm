function solution(a, b, c) {
    let answer = 0
    const arr = [a,b,c]
    let count1 = arr.filter(x => x === a).length > 1 ? 1 : 0
    let count2 = arr.filter(x => x === b).length > 1 ? 1 : 0
    let count3 = arr.filter(x => x === c).length > 1 ? 1 : 0
    let sumCount = count1 + count2 + count3
    
    if(sumCount < 2){
        answer = a+b+c
    }else if(sumCount === 2){
        console.log("마아?")
        answer = (a+b+c) * ((a*a) + (b*b) + (c*c))
    }else if (sumCount === 3){
        answer = (a+b+c) * ((a*a) + (b*b) + (c*c)) * ((a*a*a) + (b*b*b) + (c*c*c))
    }
    
    
    
    return answer;
}