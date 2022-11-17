//const helloWorld = React.createElement('h1', {}, 'Hello world!');

// const firstName = 'maximilien';
// const lastName = 'label';


// Solution sans bonus
// const helloWorld = <h1>Hello <span>{firstName[0].toUpperCase() + firstName.slice(1)}</span> <span className="red-text">{lastName.toUpperCase()}</span></h1>;



/**
 * 
 * Solution avec bonus
 */


//  const formatFirstName = (value) => value[0].toUpperCase() + value.slice(1);

//  const formatLastName = (value) => value.toUpperCase();
 
//  // Solution avec bonus
//  const helloWorld = (
//    <h1>
//      Hello <span>{formatFirstName(firstName)}</span>{" "}
//      <span className="red-text">{formatLastName(lastName)}</span>
//    </h1>
//  );

 

// Function component :

// function FirstName(props) {
//   return <span>{props.firstName[0].toUpperCase() + props.firstName.slice(1)}</span>
// }

// function LastName(props) {
//   return <span>{props.lastName.toUpperCase()}</span>
// }

// const formatFirstName = (value) => value[0].toUpperCase() + value.slice(1);
// const formatLastName = (value) => value.toUpperCase();

// // const element = 
// //   <div>
// //     <span><FirstName firstName="maximilien" /> </span>
// //     <span className="red-text"><LastName lastName="label"/></span>
// //   </div>

// const element = 
//   <div>
//     <span>{formatFirstName(firstName)} </span>
//     <span className="red-text">{formatLastName(lastName)}</span>
//   </div>

// ReactDOM.render(element, document.querySelector('#app'));

// Class component :

// class FirstName extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <span>{this.props.firstName[0].toUpperCase() + this.props.firstName.slice(1)}</span>
//   }
// }

// class LastName extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <span>{this.props.lastName.toUpperCase()}</span>
//   }
// }

// const element2 = 
//   <div>
//     <span><FirstName firstName="maximilien" /> </span>
//     <span className="red-text"><LastName lastName="label" /></span>
//   </div>

// ReactDOM.render(element2, document.querySelector('#app'));


// ===========================================================================

// Function component with format functions :

// function FirstName(props) {
//   const formatFirstName = (value) => value[0].toUpperCase() + value.slice(1);
//   return <span>{formatFirstName(props.firstName)}</span>;
// }

// function LastName(props) {
//   const formatLastName = (value) => value.toUpperCase();
//   return <span className="red-text">{formatLastName(props.lastName.toUpperCase())}</span>;
// }

// const element = 
//   <div>
//     <span><FirstName firstName="maximilien" /> </span>
//     <span><LastName lastName="label"/></span>
//   </div>

// // const element = 
// //   <div>
// //     <span>{formatFirstName(firstName)} </span>
// //     <span className="red-text">{formatLastName(lastName)}</span>
// //   </div>

// ReactDOM.render(element, document.querySelector('#app'));

// Class component with format functions :

class FirstName extends React.Component {
  constructor(props) {
    super(props);
  }
  formatFirstName = (value) => value[0].toUpperCase() + value.slice(1);
  render() {
    return <span>{this.formatFirstName(this.props.firstName)}</span>
  }
}

class LastName extends React.Component {
  constructor(props) {
  super(props);
  }
  formatLastName = (value) => value.toUpperCase();
  render() {
    return <span className="red-text">{this.formatLastName(this.props.lastName)}</span>
  }
}

const element2 = 
  <div>
    <span><FirstName firstName="maximilien" /> </span>
    <span><LastName lastName="label" /></span>
  </div>

ReactDOM.render(element2, document.querySelector('#app'));
