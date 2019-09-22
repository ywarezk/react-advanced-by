import {useState} from 'react';

export default function useForms(initialValues) {
    const [values, setValues] = useState(initialValues);

    const somethingChanged = (value) => {
        setValues(value);
    }

    return [values , somethingChanged];
}