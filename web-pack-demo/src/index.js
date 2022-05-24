import { DateTime } from 'luxon';
import _ from 'lodash';

const date = DateTime.now().plus({ days: 6 });
console.log(date.toLocaleString());

function component(){
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'Webpack'],'');
    return element;
}

document.body.appendChild(component());