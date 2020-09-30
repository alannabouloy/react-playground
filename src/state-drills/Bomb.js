import React from 'react';

export default class Bomb extends React.Component {
    state = {
        count: 0
    }

    componentDidMount() {
        setInterval(() => {
            const newCount = this.state.count + 1
            this.setState({
                count : newCount
            })
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    countRegister = () => {
        if(this.state.count % 2 === 0 && this.state.count < 8){
            return 'tick'
        }
        if(this.state.count % 2 !== 0 && this.state.count < 8){
            return 'tock'
        }
        if(this.state.count === 8){
            return 'BOOM!'
        }
        if(this.state.count > 8){
            clearInterval(this.interval)
        }

    }

    render(){
        return (
        <div>
            <p>{this.countRegister()}</p>
        </div>)
    }
}
