var itens = []

document.querySelector(".cad").addEventListener("click", ()=>{
    //alert("clicado")
    var nomeProduto = document.getElementById("nomeProduto")
    var valorProduto = document.getElementById("valorProduto")
    
    
    /*alert(nomeProduto)
    alert(valorProduto)*/
    itens.push({
        nome: nomeProduto.value,
        valor: valorProduto.value
    })
    /*alert(itens[0].nome)
    alert(itens[0].valor)*/
    let listaProdutos = document.querySelector(".lista-produtos")
    let somaText = document.querySelector(".soma")
    let soma = 0
    listaProdutos.innerHTML = "";
    itens.map(function(val){
        soma+=parseFloat(val.valor);
        listaProdutos.innerHTML += `
        <div class="produto-single">
            <h3>`+val.nome+`</h3>
            <span>`+val.valor+`</span>
        </div>
        `;
        somaText.innerHTML = `A soma dos produtos é igual a `+soma
    })
    soma = soma.toFixed(2)
    nomeProduto.value = ""
    valorProduto.value = ""
})

document.querySelector(".clear").addEventListener("click", ()=>{
    //alert("limpadp")
    itens = [];
    document.querySelector(".lista-produtos").innerHTML = "";
    document.querySelector(".soma").innerHTML = "";
})