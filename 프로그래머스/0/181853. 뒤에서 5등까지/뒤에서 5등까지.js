function solution(num_list) {
    
    let answer = [];
    
    const sortList = num_list.sort((a,b) =>{return a-b});
    
    for(let i =0; i<num_list.length; i++){
        if(i < 5){
            answer.push(sortList[i])
        }
    }
    
    return answer;
}