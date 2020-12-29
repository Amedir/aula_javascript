//comentário de uma linha
/*comenta tudo*/

function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
    //return alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://github.com/Amedir/aula_javascript");
    window.location.href = "https://github.com/Amedir/aula_javascript";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
function soma(n1, n2){
    return n1 + n2
}


function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
*/
//var idade = prompt("Qual sua idade? ");
//console.log(validaIdade(idade));

//alert(soma(5, 56));

/*
var d = new Date();
alert(d.getMonth(+1));
*/
/*
var count;
for(count=0; count <= 5; count++){
    console.log(count);
}
*/
/*
var count = 0;
while (count <= 5){
    console.log(count);
    count++;
};
*/
/*
var idade = prompt("Qual sua idade? ")
//var idade = 18;
if (idade >= 18){
    alert("Maior de idade")
}else{
    alert("Menor de idade")
};
*/
/*
var frutas = [{nome: "maçã", cor:"vermelha"}, {nome: "uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].cor);
*/
/*
var fruta = {nome: "maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/
//var lista = ["maça", "perâ", "laranja"]
//lista.push("uva");
//lista.pop();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" .i. "));

//var nome = "Ademir Monteiro";
//var n1 = 7;
//var n2 = 6;
//var frase = "Brasil is the best";
//alert(nome + " tem " + idade);
//alert(idade + idade2);
//console.log((n1+n2)/2)
//console.log(frase.toUpperCase());
