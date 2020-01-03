            let number1=0;
            let number2=0;
            let resultVal = 0;

function doAddition(number1, number2) {
    return parseInt(number1)+parseInt(number2);
}

function captureData(e){
    number1 = e;             
} 

function captureData1(e){
    number2 = e;             
}

function doAdd(){    
    resultVal = doAddition(number1,number2);    
    document.getElementById("resultOutput").innerHTML="<b>"+resultVal+"</b>";    
}

