class CardBasic extends HTMLElement {
    constructor() {
        super();
        this.rol = '';
        this.name = '';
        this.profile = '';
        this.drawed = false;
    }

    connectedCallback() {
        this.drawed = true;
        let shadow = this.attachShadow({ mode: 'closed' });
        let templateElem = document.getElementById('cardTemplate');
        templateElem.innerHTML +=
            `<style>
                :host {
                    display: flex;
                    overflow: hidden;
                    padding: 10px;
                    box-sizing: border-box;
                    font-family: 'Poppins', sans-serif;
                }
                
                .container>.card>.card-body>.image {
                    flex: 0 0 auto;
                    width: 200px;
                    height: auto;
                    vertical-align: middle;
                    border-radius: 5px;
                }
                
                .container>.card>.card-header>.image {
                    flex: 0 0 auto;
                    height: 40px;
                    width: auto;
                    vertical-align: middle;
                }
                
                .container {
                    display: flex;
                    flex: 1;
                    align-items: center;
                    flex-direction: column-reverse;
                    padding: 20px;
                }
                
                .container>.card>.card-body>.name {
                    font-size: 2rem;
                    font-weight: 600;
                    line-height: 1;
                    margin: 0;
                    margin-top: 15px;
                    color: white;
                }
                
                .card {
                    width: 100%;
                    display: flex;
                    flex: 0.5;
                    align-items: center;
                    flex-direction: column;
                    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
                    border-radius: 6px;
                    background-color: #ffffff;
                    box-sizing: border-box;
                    padding: 20px;
                }
                
                .container>.card>.card-header {
                    width: 100%;
                    display: flex;
                    flex: 0.5;
                    align-items: center;
                    flex-direction: column-reverse;
                    border: 1px solid #eeeeee;
                    border-radius: 6px 6px 0 0;
                    padding-top: 1.5rem;
                    padding-bottom: 1.5rem;
                }
                
                .container>.card>.card-body {
                    width: 100%;
                    display: flex;
                    flex: 0.5;
                    align-items: center;
                    flex-direction: column-reverse;
                    background-color: rgb(89, 89, 89);
                    padding-top: 2rem;
                    padding-bottom: 1.5rem;
                }
                
                .container>.card>.card-footer {
                    width: 100%;
                    display: flex;
                    flex: 0.5;
                    align-items: center;
                    flex-direction: column-reverse;
                    background-color: rgb(200, 56, 56);
                    border-radius: 0 0 6px 6px;
                }
                
                .container>.card>.card-footer p {
                    font-weight: 700;
                    color: white;
                    font-size: 2rem;
                }
            </style>`
        let content = templateElem.content.cloneNode(true);
        content.querySelector('#profile-img').setAttribute('src', this.profile);
        content.querySelector('#profile-name').innerText = this.name;
        content.querySelector('#profile-rol').innerText = this.rol;
        shadow.appendChild(content);
    }

    disconnectedCallback() {
        this.drawed = false;
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (name === 'rol')
            this.rol = newVal;
        if (name === 'profile')
            this.profile = newVal;
        if (name === 'name')
            this.name = newVal;
        if (this.drawed)
            this.innerHTML = this.rol;
    }

    static get observedAttributes() {
        return ['rol', 'name', 'profile'];
    }
}

window.customElements.define("card-basic", CardBasic);