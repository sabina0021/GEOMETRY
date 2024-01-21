function calculationArea(inputId){
    const inputfield=document.getElementById(inputId);
    const inputvalueString=inputfield.value;
    const inputvalue=parseFloat(inputvalueString);
    inputfield.value='';

    return inputvalue;}


document.getElementById('area-calculate').addEventListener('click', function(){
    const inputbase=calculationArea('base');
    const inputhigh=calculationArea('high');

    const area=0.5*inputbase*inputhigh;
    
    if(inputbase>0 && inputhigh>0){
        const RESULT=document.getElementById('RESULT');
        RESULT.innerText=area;
    }else{
        alert('please enter the positive value')
    }

})