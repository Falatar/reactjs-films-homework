import _ from 'lodash';
import Signature from '../components/Signature';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return <Signature name="Igor Kozitsky"/>;
}

document.body.appendChild(component());