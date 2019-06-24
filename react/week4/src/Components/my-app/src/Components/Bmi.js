import React from 'react';
import Range from './Range';
import Output from './Output';
import ShowData from './ShowData';

class Bmi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            weight: 65,
            height: 170,
            bmi: 22.49,
            bmiClass: 'Normal'
        }

    }
    heightChange(height) {
        this.setState({
            height,
            height
        }, this.setBmi)
    }

    weightChange(weight) {
        this.setState({
            weight,
            weight
        }, this.setBmi)
    }

    setBmi() {
        let bmi = ((this.state.weight / this.state.height / this.state.height) * 10000).toFixed(2);
        this.setState({
            bmi: bmi,
            bmiClass: this.getBmiClass(bmi)
        }, () => {
            console.log(this.state)
        })
    }
    getBmiClass(bmi) {
        if(bmi<18.5) return 'underweight';
        if(bmi>=18.5&&bmi<=24.9) return 'Normal';
        if(bmi>=25&&bmi<=29.9) return 'OverWeight';
        if(bmi>=30) return 'Obese';
    }
    render() {
        return (
            <div>
                <h2>this is Bmi class</h2>
                <form>
                    <div>
                        <label>weight</label>
                        <Output
                            value={this.state.weight}
                            onChange={this
                            .weightChange
                            .bind(this)}></Output>
                    </div>
                    <div>
                        <label>height</label>
                        <Range
                            value={this.state.height}
                            onChange={this
                            .heightChange
                            .bind(this)}></Range>
                    </div>
                    <div>
                        <ShowData data ={this.state}/>
                    </div>
                </form>
            </div>
        )
    }
}
export default Bmi;