const initialAmount = document.getElementById('initial');
const initialCurr = document.getElementById('initialCurr');
const finalCurr = document.getElementById('finalCurr');
const finalAmount = document.getElementById('final');

initialCurr.value = "INR";
finalCurr.value = "USD";

function listSetting(currList){
    currList.addEventListener('focus', (elem)=> {
        
        let oldValue = elem.target.value;
        elem.target.value = "";
        
        currList.addEventListener('blur', (elem)=> {
            if(elem.target.value === ''){
                elem.target.value = oldValue;
            }
        });

    });
    
    currList.addEventListener('change', (elem)=> {        
        elem.target.blur();
    
    });

    
}

listSetting(initialCurr)
listSetting(finalCurr)

function currentRate(amount, from, to){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
            jsonData = JSON.parse(xhttp.responseText);
            //console.log( jsonData['rates'][to])
            return jsonData['rates'][to];
    }
    };
    xhttp.open("GET", 'https://api.frankfurter.app/latest?amount='+amount+'&from='+from, true);
    xhttp.send();
}

//currentRate(45, 'INR', 'USD')

function UpdateRate() {
    if (initialAmount.value 
    || typeof initialAmount.value === 'number'
    || initialCurr.value !== '' 
    || finalCurr.value !== '')
    {
        finalAmount.value = currentRate(initialAmount.value, initialCurr.value, finalCurr.value);
    }else if (typeof initialAmount.value === 'number' && initialAmount.value === 0){
        finalAmount.value = 0;
    }else {
        alert('Some error occured!')
    }
}

function autoListener(items){
    items.addEventListener('change', ()=>{
        UpdateRate()
    })
}

autoListener(initialAmount)
autoListener(initialCurr)
autoListener(finalCurr)
