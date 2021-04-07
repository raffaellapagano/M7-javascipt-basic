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
    result.value = cifra + num;
    cifra = result.value;
    }else{
    cifra =num;
    acumulado = 0;
    result.value = cifra;
    cifra = result.value;
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
        result.value = acumulado;
    }else if(multiplicar || dividir){
        result.value = acumulado;
    }else{
    acumulado = acumulado+parseFloat(cifra);
    result.value = acumulado;
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
    result.value = acumulado;
    }else if(multiplicar){
        result.value = acumulado;
    }else if(dividir){
        result.value = acumulado;
    }else{
        if(p_operacion){
            acumulado = parseFloat(cifra);
            p_operacion = false;            
        }else{
            acumulado = acumulado - parseFloat(cifra);
        }
        result.value = acumulado;
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
        result.value = acumulado;
    }else if(p_multiplicacion){
        acumulado = 1;
        acumulado = acumulado * parseFloat(cifra);
        p_multiplicacion= false;
    }else{
        acumulado = acumulado * parseFloat(cifra);
    }
    result.value = acumulado;

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
        result.value = acumulado;
    }else if(p_division){
        acumulado = 1;
        acumulado = parseFloat(cifra)/acumulado;
        p_division= false;
    }else{
        acumulado = acumulado / parseFloat(cifra);
    }
    result.value = acumulado;

    cifra= "";
    multiplicar = false;
    sumar = false;
    restar= false;
    dividir = true;
}

function resultado(){
    if(sumar){
        result.value=acumulado + parseFloat(cifra);
        cifra=0;
        p_multiplicacion=true;
    }else if(restar){
        result.value = acumulado - parseFloat(cifra);
        cifra=0;
        p_multiplicacion=true;
    }else if(multiplicar){
        result.value = acumulado * parseFloat(cifra);
        cifra=1;
    }else if(dividir){
        if (cifra == 0) {
            result.value = 0;
            resetea();
            alert("No se puede dividir por 0")
        }else{
        result.value = acumulado / parseFloat(cifra);
        cifra=1;
        }
    }
    acumulado=parseFloat(result.value);
    p_result = true;
}

function resetea(){
    result.value= 0;
    cifra= "";
    acumulado = 0;
    sumar = false;
    restar= false;
    multiplicar = false;
    dividir = false;
    p_result == false;
}
