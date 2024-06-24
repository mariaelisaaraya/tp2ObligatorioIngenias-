function checkCodeAndData(code,data){

    // Number(code) verifica que el codigo ingresado se un numero. 
    // parseInt(req.params.id) funcionaba a medias, porque note que si mandabas "1e"
    // me modificaba el objeto con codigo 1, cosa que esta mal porque yo no mande "1" sino "1e"
    // Hecho de esta forma soluciono eso porque lo que hace es devolverme Nan si lo que le estoy pasando
    // no se puede convertir en numero.

    if(Number(code) && !code.includes('.')){
        if(!data.precio && Number(data.precio)){
            return {'state': false, 'status': 400, 'msj': 'Error en el precio. Valor ingresado NO valido!'}
        }
    }else{
        return {'state': false, 'status': 404, 'msj': 'Error en el codigo. Valor ingresado NO valido!'}
    }

    return {'state': true}
}

function checkCode(code){

    // Number(code) verifica que el codigo ingresado se un numero. 
    // parseInt(req.params.id) funcionaba a medias, porque note que si mandabas "1e"
    // me modificaba el objeto con codigo 1, cosa que esta mal porque yo no mande "1" sino "1e"
    // Hecho de esta forma soluciono eso porque lo que hace es devolverme Nan si lo que le estoy pasando
    // no se puede convertir en numero.

    if(Number(code) && !code.includes('.')){
        return {'state': true}
    }else{
        return {'state': false, 'status': 404, 'msj': 'Error en el codigo. Valor ingresado NO valido!'}
    }

}

function checkComputadora(computadora){
    // verifica que computadora  tenga CODIGO  y NOMBRE
    // si se ingresa sin precio se lo inicializa con 0 
    if(computadora.codigo === undefined || computadora.nombre === undefined ){
        return {'state': false,'status':400,'msj':"Error en el formato de datos a crear"}
    }else{
        if(computadora.precio === undefined ) computadora.precio =0;
        
        return  {'state': true,'msj':computadora}
        
    }

}

function checkSearch(dataSearch){
    if(dataSearch === undefined){
        return {'state': false,'status':400,'msj':'Error en el formato de datos ingresados'};
    }else{
        if (dataSearch.length === 0){
            return {'state': false,'status':400,'msj':'No llegan parámetros'};  
        }else{
            return  {'state': true,'msj':dataSearch};
        }
    }
}

module.exports = {checkCodeAndData,checkCode,checkComputadora,checkSearch};