function BMI (){
    let m=document.getElementById('m').value;
    let s=document.getElementById('s').value;
    let bmi=s/(m/100*m/100);
    let bmio=(bmi.toFixed(2));
   
    document.getElementById("result").innerHTML="A te BMI-d:"+ bmio+' '+ParseResult(bmio);
    }

    document.getElementById("btn").onclick=function(){
        BMI()
    }
function ParseResult(input){
    if(input<16){
        return 'súlyos soványság'
    }
    else if(input >=16 && input <=16.99 ){
        return  'mérsékelt soványság'
    }

    else if(input >=17 && input <=18.49 ){
        return  'enyhe soványság'
    }

    else if(input >=18.5 && input <=24.99 ){
        return  'normális testsúly'
    }

    else if(input >=25 && input <=29.99 ){
        return  'túlsúlyos'
    }

    else if(input >=30 && input <=34.99 ){
        return  'I. fokú (súlyos) elhízás'
    }

    else if(input >=35 && input <=39.99 ){
        return  'II. fokú (súlyos) elhízás'
    }

    else if(input >=40 ){
        return  'III. fokú (súlyos) elhízás'
    }

    return 'nincs eredmény'
}