class Local {
    constructor(){
        this.id = 1;
        this.arrayLocal = [];
        this.editId = null;

    }

    salvar(){
       let local = this.lerDados();
        if(this.validaLocal(local)){
            if(this.editId == null){
                this.adicionar(local);
            }
            else{
                this.atualizar(this.editId, local)
            }

        }
        this.listaTabela();
        this.excluir();
    }
    listaTabela(){
       let tbody = document.getElementById('tbody');
        tbody.innerText = '';
         for(let i = 0; i < this.arrayLocal.length; i++){
            let tr = tbody.insertRow();

            
            let td_addpredio = tr.insertCell();
            let td_addlocal = tr.insertCell();
            let td_acoes = tr.insertCell();

            this.arrayLocal[i].id;
            td_addpredio.innerText = this.arrayLocal[i].nomePredio;
            td_addlocal.innerText = this.arrayLocal[i].nomeLocal;

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/pen.png';
            imgEdit.setAttribute("onclick", "local.editar("+JSON.stringify(this.arrayLocal[i])+")");

            let imgExcluir = document.createElement('img');
            imgExcluir.src = 'img/lixeira-de-reciclagem.png';
            imgExcluir.setAttribute("onclick", "local.deletado("+this.arrayLocal[i].id+")");

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgExcluir);
        }
        console.log(this.arrayLocal)
    }
    adicionar(local){
        this.arrayLocal.push(local);
        this.id++;
    }

    atualizar(id, local){
        for(let i = 0; i < this.arrayLocal.length; i++)
        if(this.arrayLocal[i].id == id){
            this.arrayLocal[i].nomePredio = local.nomePredio;
            this.arrayLocal[i].nomeLocal = local.nomeLocal;

        }
    }

    editar(dados){
        this.editId = dados.id;

       document.getElementById('predio').value = dados.nomePredio;
       document.getElementById('local').value = dados.nomeLocal;

       document.getElementById('btn1').innerText = 'Atualizar'
    }

    lerDados(){
        let local = {}
        local.id = this.id;
       local.nomePredio = document.getElementById('predio').value;
       local.nomeLocal = document.getElementById('local').value;

       return local;
    }

    validaLocal(local){
        let msg = "";

        if(local.nomePredio == ''){
            msg += 'Informe o Predio \n';
        }

        if(local.nomeLocal == ''){
            msg += 'Informe o Local \n';
        }

        if(msg != ''){
            alert(msg);
            return false
        }

        return true;
    }

    excluir(){
        document.getElementById('predio').value = '';
        document.getElementById('local').value= '';
        document.getElementById('btn1').innerText = '+';
        this.editId = null;
    }

    deletado(id){

        if(confirm('Deseja Excluir Local de Trabalho')){

            let tbody = document.getElementById('tbody');

                for(let i = 0; i < this.arrayLocal.length; i++)
                {
                if(this.arrayLocal[i].id == id){
                this.arrayLocal.splice(i, 1);
                tbody.deleteRow(i);
                }
            }
        }
    }
}

var local = new Local()