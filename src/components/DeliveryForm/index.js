import React, { Component } from 'react';
import Form from '../Form';
import Input from "../Input";
import toastr from 'toastr';


class DeliveryForm extends Component {
    state = {
        fields: {
            fullName: '',
            address: '',
            city: '',
            phone: '',
            postal: '',
        },
        errors: {
            fullNameError: '',
            addressError: '',
            cityError: '',
            phoneError: '',
            postalError: '',
        }
    }
    onInput(e) {
        this.setState({ fields: {...this.state.fields, [ e.target.name ]: e.target.value,} });
    }
    validateForm(){
        const { fullName,phone,address,city,postal } = this.state.fields;
        const errors = {};
        let reg = /^\d+$/;
        let regstring = /^[a-zA-Z ]+$/;
        if(fullName === ''|| regstring.test(fullName) === false){errors.fullNameError = 'Full name is required or cannot contain numbers!'}
        if (address === '' ) { errors.addressError = 'Address is required.'; }
        if (city === '' || regstring.test(fullName) === false) { errors.cityError = 'City is required or cannot contain numbers.'; }
        if (phone === '' || reg.test(phone) === false) { errors.phoneError = 'Telephone is required or characters was entered.'; }
        if (postal === '' || reg.test(phone) === false ) { errors.postalError = 'Postal code is required or character was entered.'; }
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
        this.setState({
            fields: {
                fullName: '',
                address: '',
                city: '',
                phone: '',
                postal: '',
            }});
        window.localStorage.removeItem('cartItems');
        toastr.success('Order was submitted!','Success')
    }
}
    render() {
        const { fullName,phone,address,city,postal } = this.state.fields;
        const {fullNameError,phoneError,addressError,cityError,postalError} = this.state.errors;
        return (
            <>
                <h1>Delivery!</h1>
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
                    <Input
                        type="text"
                        value={ address}
                        name="address"
                        htmlId="address"
                        label="Enter address"
                        errorMessage={ addressError }
                        onInput={e => this.onInput(e)}/>
                    <Input
                        type="text"
                        value={ city }
                        name="city"
                        htmlId="city"
                        label="Enter city"
                        errorMessage={ cityError }
                        onInput={e => this.onInput(e)}/>
                    <Input
                        type="text"
                        value={ postal }
                        name="postal"
                        htmlId="postal"
                        label="Enter postal number"
                        errorMessage={ postalError }
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
export default DeliveryForm;
