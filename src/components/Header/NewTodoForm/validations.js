import * as Yup from "yup";

const validations = Yup.object().shape({
    text: Yup.string().required('Tesxt is a requirred field!')
})

export default validations;