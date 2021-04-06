let cifra = "";
let acumulado = 0;
let sumar = false;
let restar = false;
let multiplicar = false;
let dividir = false;
let p_operacion = true;
let p_multiplicacion = true;
let p_division = true;
let p_result = false;

function display_numeros(num){
    if (p_result == false){
    document.getElementById("result").value = cifra + num;
    cifra = document.getElementById("result").value;
    }else{
    cifra =num;
    acumulado = 0;
    document.getElementById("result").value = cifra;
    cifra = document.getElementById("result").value;
    p_result = false;
    sumar= false;
    restar = false;
    multiplicar = false;
    dividir = false;
    p_operacion = true;
    p_multiplicacion = true;
    p_division = true;
    }
}


function suma(){
    p_result = false;
    if(restar){
        acumulado = acumulado-parseFloat(cifra);
        document.getElementById("result").value = acumulado;
    }else if(multiplicar || dividir){
        document.getElementById("result").value = acumulado;
    }else{
    acumulado = acumulado+parseFloat(cifra);
    document.getElementById("result").value = acumulado;
    }
    cifra= "";
    sumar= true;
    restar = false;
    multiplicar = false;
    dividir = false;
    p_operacion = false;
}

function resta(){
    p_result = false;
    if(sumar){
    acumulado = acumulado + parseFloat(cifra);
    document.getElementById("result").value = acumulado;
    }else if(multiplicar){
        document.getElementById("result").value = acumulado;
    }else if(dividir){
        document.getElementById("result").value = acumulado;
    }else{
        if(p_operacion){
            acumulado = parseFloat(cifra);
            p_operacion = false;            
        }else{
            acumulado = acumulado - parseFloat(cifra);
        }
    document.getElementById("result").value = acumulado;
    }
    cifra= "";
    sumar= false;
    restar = true;
    multiplicar = false;
    dividir = false;
}

function multiplica(){
    p_result = false;
    if(sumar|| restar || dividir){
        acumulado = acumulado;
        document.getElementById("result").value = acumulado;
    }else if(p_multiplicacion){
        acumulado = 1;
        acumulado = acumulado * parseFloat(cifra);
        p_multiplicacion= false;
    }else{
        acumulado = acumulado * parseFloat(cifra);
    }
    document.getElementById("result").value = acumulado;

    cifra= "";
    multiplicar = true;
    sumar = false;
    restar= false;
    dividir = false;
}

function division(){
    p_result = false;
    if(sumar || restar || multiplicar){
        acumulado = acumulado;
        document.getElementById("result").value = acumulado;
    }else if(p_division){
        acumulado = 1;
        acumulado = parseFloat(cifra)/acumulado;
        p_division= false;
    }else{
        acumulado = acumulado / parseFloat(cifra);
    }
    document.getElementById("result").value = acumulado;

    cifra= "";
    multiplicar = false;
    sumar = false;
    restar= false;
    dividir = true;
}

function resultado(){
    if(sumar){
        document.getElementById("result").value=acumulado + parseFloat(cifra);
        cifra=0;
        p_multiplicacion=true;
    }else if(restar){
        document.getElementById("result").value= acumulado - parseFloat(cifra);
        cifra=0;
        p_multiplicacion=true;
    }else if(multiplicar){
        document.getElementById("result").value= acumulado * parseFloat(cifra);
        cifra=1;
    }else if(dividir){
        document.getElementById("result").value= acumulado / parseFloat(cifra);
        cifra=1;
    }
    acumulado=parseFloat(document.getElementById("result").value);
    p_result = true;
}

function resetea(){
    document.getElementById("result").value= 0;
    cifra= "";
    acumulado = 0;
    sumar = false;
    restar= false;
    multiplicar = false;
    dividir = false;
    p_result == false;
}
