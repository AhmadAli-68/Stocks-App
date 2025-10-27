declare global {
    type SignUpFormData = {
        fullName: string;
        email: string;
        password: string;
        country: string;
        investmentGoals: string;
        riskTolerance: string;
        preferredIndustry: string;
    };

    type FormInputProps = {
        name: string;
        label: string;
        placeholder: string;
        type?: string;
        register: UseFormRegister;
        error?: FieldError;
        validation?: RegisterOptions;
        disabled?: boolean;
        value?: string
    };

    type SelectFieldProps = {
        name: string;
        label: string;
        placeholder: string;
        options: readonly Option[]
        control: Control;
        error?: FieldError;
        required?: boolean;
    };

    type CountrySelectProps = {
        name: string;
        label: string;
        control: Control;
        error?: FieldError;
        required?: boolean;
    }
}

export { };