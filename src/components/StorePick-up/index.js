import React, { Component } from 'react';
import Form from '../Form';
import Input from "../Input";
import toastr from 'toastr';


class StorePickUp extends Component {
    state = {
        fields: {
            fullName: '',
            phone: '',

        },
        errors: {
            fullNameError: '',
            phoneError: '',
        }
    }
    onInput(e) {
        this.setState({ fields: {...this.state.fields, [ e.target.name ]: e.target.value,} });
    }
    validateForm(){
        const { fullName,phone } = this.state.fields;
        let reg = /^\d+$/;
        const errors = {};
        let regstring = /^[a-zA-Z ]+$/;
        if(fullName === ''|| regstring.test(fullName) === false){errors.fullNameError = 'Full name is required or cannot contain numbers!'}
        if (phone === '' || reg.test(phone) === false) { errors.phoneError = 'Telephone is required or characters was entered.'; }


        if (Object.keys(errors).length > 0) {
            this.setState({...this.state.errors,errors});
            return false;
        }
        return true;

    }

    submitForm(e){
        e.preventDefault();
        if(!this.validateForm()){
            toastr.error('The form was not successfully submitted!','Failed!');
        } else{
            console.log(this.state.fields);
            toastr.success('This form was successfully submitted!','Success')
        }
    }
    render() {
        const { fullName,phone } = this.state.fields;
        const {fullNameError,phoneError} = this.state.errors;
        return (
            <>
                <h1>Pick-up at our store!</h1>
                <Form onSubmit={e => this.submitForm(e)}>
                    <Input
                        type="text"
                        value={ fullName }
                        name="fullName"
                        htmlId="fullName"
                        label="Enter full name"
                        errorMessage={ fullNameError }
                        onInput={e => this.onInput(e)} />
                    <Input
                        type="text"
                        value={ phone }
                        name="phone"
                        htmlId="phone"
                        label="Enter phone number"
                        errorMessage={ phoneError }
                        onInput={e => this.onInput(e)}/>
                    <input
                        type="submit"
                        value='Continue'
                        className='btn btn-primary'
                        style={{ float: 'right', marginTop: '10',marginRight:'10'}}/>
                </Form>
            </>
        )

    }

}
export default StorePickUp;