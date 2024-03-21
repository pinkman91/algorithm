function solution(num_list) {
    
    const filterEven = num_list.filter(x => x%2 === 0)
    const filterOdd = num_list.filter(x => x%2 !==0)
    let evenStr = '' 
    let oddStr = ''
    
    for(const item of filterEven){
        evenStr += item.toString()
    }
    for(const item of filterOdd){
        oddStr += item.toString()
    }
    
    return Number(evenStr) + Number(oddStr);
}