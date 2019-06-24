import React from 'react';

class Output extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.value
        }
    }
    static defaultProps = {
        min: 0,
        max: 245,
        step: 1
    }
    onChange(event){
console.log(event.target.value)
this.props.onChange(this.state.value) ;
this.setState({value:event.target.value})

    }
    render() {
        return (
            <div>
                <h2>this is range class</h2>
                <input
                    type="range"
                    value={this.state.value}
                    min={this.props.min}
                    max={this.props.max}
                    step={this.props.step}
                    onChange ={this.onChange.bind(this)}>
                    </input>
                    
            </div>
        )
    }

}
export default Output;