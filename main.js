
const helloWorld = <h1>Hello world!</h1>;

ReactDOM.render(helloWorld, document.querySelector('#app'));

const lastName = `label`;
const firstName = `maximilien`;

const element = 
  <div>
    <span>{firstName[0].toUpperCase() + firstName.slice(1)}</span> <span className="redText">{lastName}</span>
  </div>;

ReactDOM.render(element, document.querySelector('#app'));
