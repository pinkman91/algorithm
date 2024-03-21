const solution = (a, b) => {
    
    const sumCaseOne = Number((a.toString() + b.toString()));
    const sumCaseTwo = Number((b.toString() + a.toString()));
    
    return sumCaseOne > sumCaseTwo ? sumCaseOne : sumCaseTwo
}