/*---------------------------------------------------------------------------------------------
 *  Copyright (c) EGAAS S.A. All rights reserved.
 *  See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import React, { ChangeEventHandler } from 'react';

import { ModalContainer, IModalProps } from '../';
import ModalWindow from 'containers/Modal/ModalWindow';
import Button from 'components/Button/Button';
import Validation from 'components/Validation';
import Label from 'components/Form/Label';
import ValidatedForm from 'components/Validation/ValidatedForm';

interface Params {}

interface State {
    password: string;
}

class AuthAccountRestoreModal extends ModalContainer<
    IModalProps<Params, { privateKey: string; password: string }>,
    State
> {
    public static className = ' ';

    state: State = {
        password: ''
    };

    private _form: ValidatedForm;

    handleSubmit = () => {
        const values = this._form.validateAll();

        if (values.valid) {
            this.props.onResult({
                privateKey: values.payload.privateKey.value,
                password: this.state.password
            });
        }
    }

    handleChange: ChangeEventHandler<any> = e => {
        this.setState({
            password: e.target.value
        });
    }

    render() {
        return (
            <ModalWindow
                title="Recover access"
                width={400}
                icon="Upload"
                controls={
                    <div>
                        <Button type="link" onClick={this.props.onCancel}>
                            Cancel
                        </Button>
                        <Button onClick={this.handleSubmit}>Continue</Button>
                    </div>
                }
            >
                <div>
                    Please enter your private key to recover access to your
                    account
                </div>
                <div style={{ marginTop: '20px' }}>
                    <Validation.components.ValidatedForm
                        ref={(l: any) => (this._form = l)}
                    >
                        <Validation.components.ValidatedFormGroup for="privateKey">
                            <Label>Private key</Label>
                            <Validation.components.ValidatedControl
                                type="text"
                                name="privateKey"
                                validators={[
                                    Validation.validators.regex(/[a-z0-9]{64}/i)
                                ]}
                                noValidate
                            />
                            <Validation.components.ValidationMessage for="privateKey" />
                        </Validation.components.ValidatedFormGroup>
                        <Validation.components.ValidatedFormGroup for="password">
                            <Label>New password</Label>
                            <Validation.components.ValidatedControl
                                type="password"
                                name="password"
                                validators={[Validation.validators.password]}
                                onChange={this.handleChange}
                                value={this.state.password}
                                noValidate
                            />
                            <Validation.components.ValidationMessage for="password" />
                        </Validation.components.ValidatedFormGroup>
                        <Validation.components.ValidatedFormGroup for="confirmation">
                            <Label>Repeat password</Label>
                            <Validation.components.ValidatedControl
                                key={this.state.password}
                                type="password"
                                name="confirmation"
                                validators={[
                                    Validation.validators.compare(
                                        this.state.password
                                    )
                                ]}
                                noValidate
                            />
                            <Validation.components.ValidationMessage for="confirmation" />
                        </Validation.components.ValidatedFormGroup>
                    </Validation.components.ValidatedForm>
                </div>
            </ModalWindow>
        );
    }
}
export default AuthAccountRestoreModal;
