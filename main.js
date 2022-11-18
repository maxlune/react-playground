

// // -------------------------------------------
// // Étape 1 => On modifie le composant input
// // -------------------------------------------

// /* class NameForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: ''};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('Le nom a été soumis : ' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Nom :
//             <input type="text" value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Envoyer" />
//         </form>
//       );
//     }
//   }
//  */


// function NameForm(props) {
//     const [name, setName] = React.useState('');

//     const handleChange = (e) => {
//         e.preventDefault();
//         setName(e.target.value);
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         console.log(`Le nom a été soumis: ${name}`);
//     }



//     return(
//     <form onSubmit={handleSubmit}>
//         <label>
//         Nom :
//         <input type="text" value={name} onChange={handleChange} />
//         </label>
//         <input type="submit" value="Envoyer" />
//     </form>
// );
// }



// // ReactDOM.render(<NameForm />, document.querySelector('#app'));






// // -------------------------------------------
// // Étape 2 => On modifie le composant textarea
// // -------------------------------------------



// /* class EssayForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         value: 'Écrivez un essai à propos de votre élément du DOM préféré'
//       };
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('Un essai a été envoyé : ' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Essay:
//             <textarea value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Envoyer" />
//         </form>
//       );
//     }
//   } */

// function EssayForm(props) {
//     const [text, setText] = React.useState('Écrivez un essai à propos de votre élément du DOM préféré');

//     const handleChange = (e) => {
//         e.preventDefault();
//         setText(e.target.value);
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(`Le texte a été soumis: ${text}`);
//     }
      
//     return(
//         <form onSubmit={handleSubmit}>
//           <label>
//             Essay:
//             <textarea rows={5} cols={35} value={text} onChange={handleChange} />
//           </label>
//           <input type="submit" value="Envoyer" />
//         </form>

//       )


//   }



// //   ReactDOM.render(<EssayForm />, document.querySelector('#app'));





// // -------------------------------------------
// // Étape 3 => On modifie le composant select
// // -------------------------------------------

// /* class FlavorForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: 'coconut'};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('Votre parfum favori est : ' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Choisissez votre parfum favori :
//             <select value={this.state.value} onChange={this.handleChange}>
//               <option value="grapefruit">Pamplemousse</option>
//               <option value="lime">Citron vert</option>
//               <option value="coconut">Noix de coco</option>
//               <option value="mango">Mangue</option>
//             </select>
//           </label>
//           <input type="submit" value="Envoyer" />
//         </form>
//       );
//     }
//   } */

// function FlavorForm(props) {
//     const [value, setValue] = React.useState('coconut');
//     const handleChange = (e) => {
//         e.preventDefault();
//         setValue(e.target.value)

//     }
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(`la valeur sélectionnée est: ${value}`);
//     }

//     return(
//         <form onSubmit={handleSubmit}>
//           <label>
//             Choisissez votre parfum favori :
//             <select value={value} onChange={handleChange}>
//               <option value="grapefruit">Pamplemousse</option>
//               <option value="lime">Citron vert</option>
//               <option value="coconut">Noix de coco</option>
//               <option value="mango">Mangue</option>
//             </select>
//           </label>
//           <input type="submit" value="Envoyer" />
//         </form>
//     );
// }



// //ReactDOM.render(<FlavorForm/>, document.querySelector('#app'));




// function MultiForm(props) {
//     const [inputs, setInputs] = React.useState({
//         name: '',
//         text: '',
//         value: "coconut"
//     });

    

// /*     

//     // useCallback n'est pas forcément le meilleur choix ici

    
//     const handleChange = React.useCallback(
//         ({target: {name, value}}) => {
//             setInputs(state => ({...state, [name]: value}), []);
//             console.log(inputs);
//         },
//         [inputs]
//     )

//  */

    
//     const handleChange = ({target: {name, value}}) => {
//         setInputs(state => ({...state, [name]: value}), []);
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         for(const name in inputs) {
//             console.log(`${name}: ${inputs[name]}`)
//         }
//     }


//     return(
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Nom :
//                 <input type="text" name="name" value={inputs.name} onChange={handleChange} />
//             </label>

//             <label>
//                 Essay:
//                 <textarea name="text" value={inputs.text} onChange={handleChange} />
//             </label>

//             <label>
//                 Choisissez votre parfum favori :
//                 <select name="value" value={inputs.value} onChange={handleChange}>
//                     <option value="grapefruit">Pamplemousse</option>
//                     <option value="lime">Citron vert</option>
//                     <option value="coconut">Noix de coco</option>
//                     <option value="mango">Mangue</option>
//                 </select>
//             </label>

//             <input type="submit" value="Envoyer" />
//         </form>
//     )
// }

// ReactDOM.render(<MultiForm />, document.querySelector('#app'));

// ============================================================

// function App(props) {
//     const [inputs, setInputs] = React.useState({base: "", number: 0})

//     const handleChange = (value) => {
//         setInputs({base: "decimal", number: value})
//     }

//     const handleChangeB = (value) => {
//         setInputs({base: "decimal", number: value})
//     }

//     const simple = inputs.base === 'decimal' ? divide(inputs.number) : inputs.number;
//     const double = inputs.base === 'binaire' ? doubled(inputs.number) : inputs.number;

//     return (
//         <React.Fragment>
//             <BaseNumberInput base="decimal" value={inputs.number} onChangeBase={handleChange} />
//             <BaseNumberInput base="binaire" value={inputs.number * 2} onChangeBase={handleChange}/>
//         </React.Fragment>
//     )
// }

// function BaseNumberInput(props) {
//     const base = props.base;
//     const number = props.number;

//     const onChangeBase = (e) => {
//         props.onChangeBase(e.target.value)
//     }

//     return (
//         <fieldset>
//             <legend>nombre en {base}</legend>
//             <input type="number" value={number} onChange={onChangeBase}></input>
//         </fieldset>
//     )
// }

// ReactDOM.render(<App />, document.querySelector('#app'));

// ========== UPDATED WORKING

// function convertToBinary(number) {
//   return Number(number).toString(2)
// }

// function convertToDecimal(number) {
//   return parseInt(number, 2)
// }

// function App (props) {
//   const [decimal, setDecimal] = React.useState("")
//   const [binary, setBinary] = React.useState("")

//   const handleChange = (value, base) => {
//     switch (base) {
//       case "decimal":
//         setDecimal(value)
//         setBinary(convertToBinary(value))
//         break;
//       case "binary":
//         setDecimal(convertToDecimal(value))
//         setBinary(value)
//       break;
//     }
//   }

//   return (
//     <React.Fragment>
//       <BaseNumberInput base="decimal" number={decimal} onChangeBase={handleChange}/>
//       <BaseNumberInput base="binary" number={binary} onChangeBase={handleChange}/>
//     </React.Fragment>
//   )
// }



// function BaseNumberInput (props) {
//   const base = props.base
//   const number = props.number

//   return (
//     <fieldset>
//       <legend>Saisissez un nombre en {base} :</legend>
//       <input type="text" value={number} onChange={(e) => props.onChangeBase(e.target.value, base)} />
//     </fieldset>
//   )
// }

// ReactDOM.render(<App />, document.querySelector('#app'));

// ======= CORRECTION =============

// const App = (props) => {
//   const [base, setBase] = React.useState("none")
//   const [decimal, setDecimal] = React.useState("");
//   const [convertedNumber, setConvertedNumber] = React.useState("")

//   React.useEffect(() => {
//     handleChange(decimal)
//   }, [base])
  

//   const handleChange = (value) => {

//     setConvertedNumber(parseInt(value, 10).toString(+base))
//     setDecimal(value)

//     // switch (base) {
//     //   case "none":
//     //     setDecimal(e.target.value)
//     //     break;
//     //   case "binary":
//     //     setConvertedNumber(parseInt(e.target.value, 10).toString(2))
//     //     setDecimal(e.target.value)
//     //     break;
//     //   case "ternary":
//     //     setConvertedNumber(parseInt(e.target.value, 10).toString(3))
//     //     setDecimal(e.target.value)
//     //     break;
//     //   case "septenary":
//     //     setConvertedNumber(parseInt(e.target.value, 10).toString(7))
//     //     setDecimal(e.target.value)
//     //     break;
//     //   case "hexadecimal":
//     //     setConvertedNumber(parseInt(e.target.value, 10).toString(16))
//     //     setDecimal(e.target.value)
//     // }
//     // setDecimal(e.target.value)
//     // setBinary(parseInt(e.target.value, 10).toString(2))
//   }

//   const handleBaseChange = (e) => {
//     setBase(e.target.value)
//     handleChange(decimal)
//   }

//   return(
//     <React.Fragment>
//       <BaseNumberInput 
//         base="decimal"
//         onChangeBase={handleChange} 
//         number={decimal} />

//     <SelectBaseInput selectedBase={base} handleBaseChange={handleBaseChange}></SelectBaseInput>

//       {
//       base !== "10" && <BaseNumberInput 
//         onChangeBase={handleChange} 
//         base={base} 
//         number={convertedNumber}/>
//       }
//     </React.Fragment>
//   )
// }

// const BaseNumberInput = (props) => {
//   return(
//     <label htmlFor="">
//       {props.base} value
//       <input 
//       type="text" 
//       value={props.number} 
//       onChange={({taget: {value}}) => props.onChangeBase(value)}/>  
//     </label>
//   )
// }

// const SelectBaseInput = (props) => {

//   return(
//     <label htmlFor="prout">
//       <select name="prout" id="prout" onChange={props.handleBaseChange} value={props.selectedBase}>
//         <option value="none">Choisir une option</option>
//         <option value="2">Binaire</option>
//         <option value="3">Ternaire</option>
//         <option value="7">Septènaire</option>
//         <option value="16">Héxadécimal</option>
//       </select>
//     </label>
//   )
// }

// ReactDOM.render(<App />, document.querySelector("#app"))

// CORRECTION

const App = () => {
  const [base, setBase] = React.useState("10");
  const [decimal, setDecimal] = React.useState("");
  const [convertedNumber, setConvertedNumber] = React.useState("");

  React.useEffect(() => {
    handleChange(decimal);
  }, [base]);

  const handleChange = (value) => {
    setConvertedNumber(parseInt(value, 10).toString(+base));
    setDecimal(value);
  };

  const handleBaseChange = (e) => {
    setBase(e.target.value);
  };
  return (
    <React.Fragment>
      <BaseNumberInput base="10" onChangeBase={handleChange} number={decimal} />

      <SelectBaseInput
        selectedBase={base}
        handleBaseChange={handleBaseChange}
      />
      {base !== "10" && (
        <BaseNumberInput
          onChangeBase={handleChange}
          base={base}
          number={convertedNumber}
        />
      )}
    </React.Fragment>
  );
};

const BaseNumberInput = ({ base, onChangeBase, number }) => {
  const baseDisplayRef = React.useRef({
    2: "Base binaire",
    3: "Base ternaire",
    7: "Base septénaire",
    10: "Base décimale",
    16: "Base hexadécimale",
  });

  return (
    <label htmlFor="">
      {baseDisplayRef.current[base]}
      <input
        type="text"
        value={number}
        onChange={({ target: { value } }) => onChangeBase(value)}
      />
    </label>
  );
};

const SelectBaseInput = ({ handleBaseChange, selectedBase }) => {
  return (
    <label htmlFor="prout">
      <select
        name="prout"
        id="prout"
        onChange={handleBaseChange}
        value={selectedBase}
      >
        <option value="10" disabled>
          choisir une option
        </option>
        <option value="2">Binaire</option>
        <option value="3">Ternaire</option>
        <option value="7">Septénaire</option>
        <option value="16">Héxadécimal</option>
      </select>
    </label>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));