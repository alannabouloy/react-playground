import React from 'react';

export default class RouletteGun extends React.Component {

    static defaultProps = {
        bulletInChamber: 8
    }
    state = {
        chamber: null,
        spinningTheChamber: false
    }

    triggerPulled = () => {
        this.setState({spinningTheChamber : true});
        let timeout = setTimeout((e) => {
            const newNumber = Math.ceil(Math.random() * 8);
            this.setState({chamber: newNumber});
            this.setState({spinningTheChamber: false});
            console.log('new number' + newNumber)
        }, 2000)
    }

    phrase = '';
    render () {
        if(this.state.spinningTheChamber){
            this.phrase = 'spinning the chamber and pulling the trigger!....';
        }else if(this.state.chamber === this.props.bulletInChamber){
            this.phrase = 'BANG!';
        }else{
            this.phrase="You're safe!";
        }
        console.log(this.state.chamber)
       
        return (
            <div>
                <p>{this.phrase}</p>
                <button onClick={this.triggerPulled}>Pull the trigger!</button>
            </div>
           
        )
    }
}