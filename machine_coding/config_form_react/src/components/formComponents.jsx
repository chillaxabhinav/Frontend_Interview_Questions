export const TextField = (props) => {
    const { name, label, type, onChange } = props;

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input type={type} name={name} onBlur={(e) => onChange(e.target.value, name)} />
        </div>
    )
};

export const RadioButton = (props) => {
    const { name, label, options, onChange } = props;
    return (
        <div>
            <label>{label}</label>
            {options.map(option => {
                return (
                    <div key={option}>
                        <label htmlFor={option}>{option}</label>
                        <input type='radio' name={name} value={option} onChange={(e) => onChange(e.target.value, name)} />
                    </div>
                )
            })}
        </div>
    );
};

export const CheckBox = (props) => {
    const { name, label, onChange } = props;
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input type='checkbox' name={name} onChange={(e) => onChange(e.target.checked, name)} />
        </div>
    );
};

// export const Slider = (props) => {
//     return (
//         <></>
//     );
// };

