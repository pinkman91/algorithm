    function solution(today, terms, privacies) {
        var answer = [];
        let setTerms = new Object();
        let setPrivacies = "";
        let privaciesArr = [];
        let checkMonth = new Date(today);
        checkMonth.setDate(checkMonth.getDate() +1)
        terms.forEach((item, index, arr) => {            
            setTerms[item.split(' ')[0]] = Number(item.split(' ')[1]) 
        });
        privaciesArr = privacies;
        privaciesArr.forEach((e,i) => {
            setPrivacies = e;    
            let getCode = setPrivacies.substring(11,13)
            let getDate = setPrivacies.substring(0,10);
            let getLastDate = new Date(getDate);   
            getLastDate.setDate(getLastDate.getDate() + 1)
            getLastDate.setMonth(getLastDate.getMonth() + setTerms[getCode])
            if(checkMonth >= getLastDate){
                answer.push(i + 1)
            }
        })
        return answer;
    }