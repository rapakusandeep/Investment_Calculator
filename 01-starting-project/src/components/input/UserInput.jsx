


export default function UserInput({inputLabelLeft, inputLabelRight}) {
    return (
        
            <table>
                <tr className="input-group">
                    <td>
                        <label>{inputLabelLeft}</label>
                        <input type="number" />
                    </td>
                    <td>
                        <label>{inputLabelRight}</label>
                        <input type="number" />
                    </td>
                </tr>
            </table>
        
    );
}