class CardBasic extends HTMLElement {
    constructor() {
        super();
        this.pokename = '';
        this.gif = '';
        this.cardcolor = '';
    }

    connectedCallback() {
        let shadow = this.attachShadow({ mode: 'closed' });
        let templateElem = document.getElementById('cardTemplate');
        templateElem.innerHTML +=
        `
        <style>
            .card{
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 160px;
                margin-top: 10px;
                transition: transform .2s;
            }
            
            .card:hover{
                transform: scale(1.1);
            }
            
            .card-body{
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: white;
            }
            
            .card>.card-body>img{
                margin-top: 10px;
            }
            
            .card>.card-body>p{
                font-size: small;
                text-shadow: 0 0 3px #fff, 0 0 5px #fff;
            }
            
            .card-footer{
                width: 100%;
                border-radius: 10px;
                background-color: ${this.cardcolor};
                box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
            }
            
            .card-footer>p{
                text-align: center;
                font-size: larger;
                font-weight: 600;
                color: white;
                letter-spacing: 1.5px;
                text-shadow: 0 0 3px #000, 0 0 5px #000;
            }
        </style>
        `
        let content = templateElem.content.cloneNode(true);
        content.querySelector('#pokemon-img').setAttribute('src', this.gif);
        content.querySelector('#pokemon-name').innerText = this.pokename;
        shadow.appendChild(content);
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (name === 'pokename')
            this.pokename = newVal;
        if (name === 'gif')
            this.gif = newVal;
        if (name === 'cardcolor')
            this.cardcolor = newVal;
    }

    static get observedAttributes() {
        return ['pokename', 'gif', 'cardcolor'];
    }
}

window.customElements.define("card-basic", CardBasic);