class NegociacaoController{

    constructor(){

         let $ = document.querySelector.bind(document);
         this._inputData = $('#data');
         this._inputQuantidade = $('#quantidade');
         this._inputValor = $('#valor');
         this._ListaNegociacoes = new ListaNegociacoes();

    }

    adiciona(event) {

        event.preventDefault();

        this._ListaNegociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();

        console.log(this._ListaNegociacoes.negociacoes);
    }

    _criaNegociacao(){

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )

    }

    _limpaFormulario(){

        this._inputData.value = '';
        this._inputQuantidade = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();

    }
}