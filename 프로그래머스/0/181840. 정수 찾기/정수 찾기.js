function solution(num_list, n) {
    
    let findCount = 0
    
    num_list.map((item) =>{
        item === n ? findCount++ : null
    })
    
    return findCount > 0 ? 1 : 0
 
}