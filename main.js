const firstName = 'r0ulito';
const lastName = 'formateur';

function FirstName(props) {

    /*
    // Solution avec bonus
    const formatFirstName = (firstName) => {
        return firstName[0].toUpperCase() + firstName.substr(1);
    }

    return <span>{formatFirstName(props.text)}</span>
    */

    // Solution sans bonus
    return <span>{props.text[0].toUpperCase() + props.text.substr(1)}</span>
}

function LastName(props) {

    /*
    // Solution avec bonus
    const formatLastName = (lastName) => {
        return lastName.toUpperCase();
    }

    return <span>{formatLastName(props.text)}</span>
    */

    // Solution sans bonus
    return <span className="red-text">{props.text.toUpperCase()}</span>

}

const helloWorld = <h1>Hello <FirstName text={firstName}/> <LastName text={lastName}/></h1>;

ReactDOM.render(helloWorld, document.querySelector('#app'));

function Clock(props) {
    return (
        <div>
        <h1>Bonjour, monde !</h1>
        <h2>Il est {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
    }

    function tick() {
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById('root')
    );
}
setInterval(tick, 1000);    

// Class component :
class Clock extends React.Component {
    render() {
       return(
        <div>
            <h1>Bonjour, monde !</h1>
            <h2>Il est {this.props.date.toLocaleTimeString()}.</h2>
        </div>
        ) 
    }
}

function Clock(props) {
    return (
        <div>
            <h1>Bonjour, monde !</h1>
            <h2>Il est {props.date.toLocaleTimeString()}.</h2>
        </div>    
    )
}
