class CardBasic extends HTMLElement {

    constructor() {
        super();
        this.pokename = '';
        this.sprite = '';
        this.cardcolor = '';
    }

    connectedCallback() {
        let shadow = this.attachShadow({ mode: 'closed' });
        let templateElem = document.getElementById('cardTemplate');
        templateElem.innerHTML +=
        `
        <style>
            .card{
                width: max-content;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 15px;
                background-color: ${this.cardcolor};
                border-radius: 10px;
                box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
                margin-bottom: 15px;
            }
            
            .card>.card-body>img{
                box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.5);
                background-color: rgb(186, 186, 186);
                width: 150px;
            }
            
            .card>.card-footer>p{
                font-size: 1rem;
                font-weight: 600;
                color: white;
                color: #fff;
                text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
            }
        </style>
        `
        let content = templateElem.content.cloneNode(true);
        content.querySelector('#pokemon-img').setAttribute('src', this.sprite);
        content.querySelector('#pokemon-name').innerText = this.pokename;
        shadow.appendChild(content);
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (name === 'pokename')
            this.pokename = newVal;
        if (name === 'sprite')
            this.sprite = newVal;
        if (name === 'cardcolor')
            this.cardcolor = newVal;
    }

    static get observedAttributes() {
        return ['pokename', 'sprite', 'cardcolor'];
    }
}

window.customElements.define("card-basic", CardBasic);