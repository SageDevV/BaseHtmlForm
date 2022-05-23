function mainEscope(){
    let dateNow = new Date("2022-05-23 00:00:00");
    let resultDate = criaData(dateNow)
    let dateHtml = document.querySelector(".dateTime");
    dateHtml.innerHTML = resultDate;
}
function criaData(date){
    let dia = date.getDate();
    let mes = date.getMonth();
    let ano = date.getFullYear();
    let hora = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    return `${dia}/${mes}/${ano}-${verificaValor(hora)}:${verificaValor(minutes)}:${verificaValor(seconds)}`;
}
function verificaValor(value){
        if(value == 0){
            return `00`;
        }
    }
mainEscope()
