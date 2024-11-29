import { FormEventHandler } from 'react';

export interface ParametersForm {
    touched: any;
    errors: any;
    handleSubmit: FormEventHandler<HTMLFormElement>;
    isSubmitting: boolean;
}
