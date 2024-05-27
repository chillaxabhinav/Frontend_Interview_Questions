import { useState } from 'react';
import {
    CheckBox,
    RadioButton,
    // Slider,
    TextField
} from './formComponents';

const componentMap = {
    TEXT_FIELD: TextField,
    RADIO_BUTTON: RadioButton,
    // SLIDER: Slider,
    CHECK_BOX: CheckBox
};

const Form = (props) => {
    const { schema, onSubmit } = props;
    const [formData, setFormData] = useState({});

    const onFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    }

    const handleChange = (val, key) => {
        setFormData({
            ...formData,
            [key]: val
        });
    }

    return (
        <form onSubmit={(e) => onFormSubmit(e)}>
            {schema.map((field) => {
                const { componentType } = field;
                const Component = componentMap[componentType];
                return <Component key={field.id} onChange={handleChange} {...field} />
            })}
            <button>Submit Form</button>
        </form>
    );
};

export default Form;
