import localStogeAdapter from '../../_utils/localStorage';

export const inforCus = 'inforCus';
const getInforCus = localStogeAdapter.getItemJson(inforCus);
export const customerInfo = {
    fullname: getInforCus ? getInforCus.fullname : '',
    email: getInforCus ? getInforCus.email : '',
    address: getInforCus ? getInforCus.address : '',
    phone: getInforCus ? getInforCus.phone : ''
};

const validate = values => {
    const errors = {};
    if (!values.fullname) {
        errors.fullname = 'Required';
    } else if (values.fullname.length < 3) {
        errors.fullname = 'Must be 3 characters or more';
    } else {
        customerInfo.fullname = values.fullname;
        localStogeAdapter.setItemJson(inforCus, customerInfo);
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    } else {
        customerInfo.email = values.email;
        localStogeAdapter.setItemJson(inforCus, customerInfo);
    }

    if (!values.address) {
        errors.address = 'Required';
    } else if (values.address.length < 10) {
        errors.address = 'Must be 10 characters or more';
    } else {
        customerInfo.address = values.address;
        localStogeAdapter.setItemJson(inforCus, customerInfo);
    }

    if (!values.phone) {
        errors.phone = 'Required';
    } else if (values.phone && values.phone.length < 10) {
        errors.phone = 'Invalid phone number, must be 10 digits';
    } else {
        customerInfo.phone = values.phone;
        localStogeAdapter.setItemJson(inforCus, customerInfo);
    }

    return errors;
};

export default validate;
