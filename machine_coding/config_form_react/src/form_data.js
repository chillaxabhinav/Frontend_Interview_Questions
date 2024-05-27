const formSchema = [
    {
        componentType: 'TEXT_FIELD',
        name: 'name',
        label: 'Name',
        type: 'text',
        id: 1,
    },
    {
        componentType: 'TEXT_FIELD',
        name: 'email',
        label: 'Email',
        type: 'email',
        id: 2,
    },
    {
        componentType: 'TEXT_FIELD',
        name: 'password',
        label: 'Password',
        type: 'password',
        id: 3
    },
    {
        componentType: 'TEXT_FIELD',
        name: 'confirmPassword',
        label: 'Confirm Password',
        type: 'password',
        id: 4
    },
    {
        componentType: 'RADIO_BUTTON',
        name: 'gender',
        label: 'Gender',
        options: [
            'Male',
            'Female'
        ],
        id: 5
    },
    // {
    //     componentType: 'SLIDER',
    //     name: 'rating',
    //     label: 'Rating',
    //     minValue: 1,
    //     maxValue: 5
    // },
    {
        componentType: 'CHECK_BOX',
        name: 'accept-terms',
        label: 'I accept terms and conditions',
        id: 6
    }
];

export default formSchema;
