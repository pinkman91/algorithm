function solution(str1, str2) {
    let answer = '';
    let str1_list = []
    let str2_list = []
    
    for(let i = 0; i<str1.length; i++){
        str1_list.push(str1.charAt(i))
    }
    for(let i = 0; i<str2.length; i++){
        str2_list.push(str2.charAt(i))
    }
    
    for(let i =0; i<str1_list.length; i++){
        answer += (str1_list[i] + str2_list[i])
    }
    
    return answer;
}