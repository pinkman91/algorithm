function solution(my_string, overwrite_string, s) {
    const subStr = my_string.substring(0,s)
    const subLeng = subStr.length
    const overLeng = overwrite_string.length
    const subStr2 = my_string.substr(subLeng+overLeng)      
      
    
    return subStr + overwrite_string + subStr2
    
}