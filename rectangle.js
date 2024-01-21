document.getElementById('AREA-CALCULATE-').addEventListener('click', function(){
    const inputwidth=calculationArea('width');
    const inputlength=calculationArea('length');

    const result=inputwidth*inputlength;
    
    if(inputwidth>0 && inputlength>0){
        const total=document.getElementById('result-');
        total.innerText=result;
    }else{
        alert('please enter the positive value')
    }

})

document.getElementById('paralle-btn').addEventListener('click', function(){
    const totalresult=calculationArea('BASE');
    const parralloarea=calculationArea('HIGHT');
    const RESULT=totalresult*parralloarea;
    const totalRESULT=document.getElementById('result_');
    totalRESULT.innerText=RESULT;
})

document.getElementById('rhom-btn').addEventListener('click', function(){
    const areaRHM=calculationArea('DIRECTION1');
    const rhmbarea=calculationArea('DIRECTION2');
    const RESULT=0.5* areaRHM*rhmbarea;
    const totalarea=document.getElementById('AREA-RHM');
    totalarea.innerText=RESULT;
})

document.getElementById('ellip-btn').addEventListener('click', function(){
    const areaellip=calculationArea('ellip1');
    const elliparea=calculationArea('ellip2');
    const RESULT=3.1416* areaellip*elliparea;
    const ellipsarea=document.getElementById('area-ellp');
    ellipsarea.innerText=RESULT;
})

document.getElementById('pen-btn').addEventListener('click', function(){
    const areapenta=calculationArea('penta1');
    const pentaarea=calculationArea('penta2');
    const RESULT=0.5*areapenta *pentaarea;
    const pentasarea=document.getElementById('area-pen');
    pentasarea.innerText=RESULT;
})

document.getElementById('blog-').addEventListener('click', function(){
    window.location='blog.html';
})