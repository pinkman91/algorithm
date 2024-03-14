function solution(n)
{
    let answer = 0;
    
    let numberToConvertString = n.toString()
    let splitStringList = [];
    
    for (let i = 0; i < numberToConvertString.length; i++) {
        splitStringList.push(numberToConvertString.charAt(i));
    }

    for (const splitString of splitStringList) {
        answer += Number(splitString);
    }
    
    return answer;
}


