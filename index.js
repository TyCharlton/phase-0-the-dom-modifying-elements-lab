// Write your code here!
const mainElement = document.querySelector('main#main');
mainElement.remove();

const headerElement = document.createElement('h1');
headerElement.textContent = 'YOUR-NAME is the champion';
headerElement.id = 'victory';
document.body.appendChild(headerElement);

const newHeader = headerElement;