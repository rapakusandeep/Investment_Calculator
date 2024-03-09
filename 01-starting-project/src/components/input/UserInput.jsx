


const data = {
    initialInvestment: undefined,
    annualInvestment: undefined,
    expectedReturn: undefined,
    duration: undefined
  };


export default function UserInput({inputLabelLeft, inputLabelRight, inputLabelLeftDown, inputLabelRightDown, onAnnualDataChange }) {


let currData = Object.assign({}, data);


    function handleInitialInvestment(val) {
        currData.initialInvestment = val.target.value;
        setCurrDataToAnnualData();
    };

    function handleAnnualInvestment(val) {
        currData.annualInvestment = (val.target.value);
        setCurrDataToAnnualData();
    };


    function handleExpectedReturn(val) {
        currData.expectedReturn = val.target.value;
        setCurrDataToAnnualData();
    };


    function handleDuration(val) {
        currData.duration = val.target.value;
        setCurrDataToAnnualData();
        console.log(currData);
    };

    function setCurrDataToAnnualData() {
        if (currData.initialInvestment && currData.annualInvestment && currData.expectedReturn && currData.duration) {            
            onAnnualDataChange(currData);
            console.log(currData);
        }
    }

    return (
        
            <table className="user-input">
                <tr className="input-group">
                    <td>
                        <label>{inputLabelLeft}</label>
                        <input type="text" required onChange={handleInitialInvestment}/>
                    </td>
                    <td>
                        <label>{inputLabelRight}</label>
                        <input type="text" onChange={handleAnnualInvestment} />
                    </td>
                </tr>
                <br/>
                <tr className="input-group">
                    <td>
                        <label>{inputLabelLeftDown}</label>
                        <input type="text" required onChange={handleExpectedReturn} />
                    </td>
                    <td>
                        <label>{inputLabelRightDown}</label>
                        <input type="text" onChange={handleDuration} />
                    </td>
                </tr>
            </table>
        
    );
}