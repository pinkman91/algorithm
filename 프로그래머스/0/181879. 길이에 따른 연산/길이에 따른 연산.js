function solution(num_list) {
    
    if(num_list.length >= 11){
        return num_list.reduce((pre,crr) => pre + crr)
    }else {
        return num_list.reduce((pre,crr) => pre * crr)
    }
}