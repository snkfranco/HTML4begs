
function acao(){

    document.write('Executando...<br/>')

}

//Execute de tempo em tempo! em milissegundos/ várias vezes repetidas...

setInterval(acao, 1000);

//Execute de tempo em tempo! em milissegundos/ apenas uma vez....

setTimeout(acao, 3000);


/// PS: Se atribuir o setInterval a uma variável, é possivel simular um setTimeout com o setInterval!
//clearInterval(*var*)