const form = document.getElementById('contatos');
let linhas=''; 
const contatos = [];
const telefones = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    criaContato();
    atualizaContatos()
});

function criaContato(){
    
    const inputNomeContato = document.getElementById('nome');   
    const inputTelContato = document.getElementById('telefone');

    if(telefones.includes(inputTelContato.value)){
        alert(`O número ${inputTelContato.value} já está associado a outro contato`);
    }else{
        contatos.push(inputNomeContato.value);
        telefones.push(inputTelContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;

    }

    inputNomeContato.value = '';
    inputTelContato.value = '';
}

function atualizaContatos(){

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}