import React from 'react';
class ShowData extends React.Component {
    constructor(props) {
        super(props)
    }

    toFeet(n) {
        let realFeet = ((n * 0.393700) / 12);
        let feet = Math.floor(realFeet);
        let inches = Math.round((realFeet - feet) * 12);
        return feet + "'" + inches;
    }

    toLbs(n) {
        let nearExact = n / 0.45359237;
        let lbs = Math.floor(nearExact);
        return lbs;
    }

    render() {
        let height = this.toFeet(this.props.data.height);
        let weight = this.toLbs(this.props.data.weight);
        let bmi = this.props.data.bmi;
        let bmiClass = this.props.data.bmiClass;
        return (
            <div>
                <label>
                    height =
                </label>
                {height}
                <br/>
                <label>
                    weight =
                </label>
                {weight}
                <br/>
                <label>
                    bmi =
                </label>
                {bmi}
                <br/>
            
                    <label>
                        bmiClass =
                    </label>
                    <h3 className ={(this.props.data.bmiClass==='Obese')?'danger':''}>{bmiClass}{(this.props.data.bmiClass==='Obese')?<a href = 'www.google.com'>what can i do?</a>:""}</h3>
                
                <br/>
            </div>
        )
    }
}
export default ShowData;
