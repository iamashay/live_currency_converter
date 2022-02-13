const publicFolder = window.location.href;
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

function currentRate(amount, from, to, cb){
    const equalToSign = document.getElementById('equalto');

    equalToSign.innerHTML = '<img src="'+publicFolder+'loading.gif" alt="loading gif">';
    console.log(equalToSign.innerHTML)   
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
            jsonData = JSON.parse(xhttp.responseText);
            //console.log( jsonData['rates'][to])
            equalToSign.innerHTML = '=';

            cb(jsonData['rates'][to]);
        }   else {
        equalToSign.innerHTML = '=';
        }
    };
    xhttp.open("GET", 'https://api.frankfurter.app/latest?amount='+amount+'&from='+from, true);
    xhttp.send();
}

//currentRate(45, 'INR', 'USD')

function UpdateRate() {
    
    if (initialAmount.value 
    && initialCurr.value !== '' 
    && finalCurr.value !== '')
    {
        currentRate(initialAmount.value, initialCurr.value, finalCurr.value, (newAmount) => {
            finalAmount.value = newAmount 
        });
        
    }else if (initialAmount.value == 0){
        finalAmount.value = 0;
    }else {
        alert('Some error occured!')
    }
}



initialAmount.addEventListener('keyup', ()=>{
    UpdateRate()
})
initialCurr.addEventListener('change', ()=>{
    UpdateRate()
})
finalCurr.addEventListener('change', ()=>{
    UpdateRate()
})

