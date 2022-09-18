import { Button, Input, Select } from "components/forms";
import { Field, FormikProvider, useFormik } from "formik";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "store/auth/actions";
import { useQuery } from "utilities";
import API_ENDPOINTS from "utilities/apiEndpoints";
import notification from "utilities/notification";
import validationSchema from "./validationSchema";

const LoginForm = () => {
    const { data, isLoading } = useQuery(API_ENDPOINTS.SHOPS)
    const navigate = useNavigate()
    const dispatch = useDispatch()



    const companies = [
        { label: 'Select your company', value: null },
        ...data.map(item => ({ label: item?.shopname, value: item?.id }))
    ]

    const formik = useFormik({
        initialValues: {
            shop_id: '',
            password: ''
        },
        validationSchema,
        onSubmit: (values) => {
            dispatch(login(API_ENDPOINTS.LOGIN, values))
                .then(response => {
                    if (response?.success) {
                        notification('success', response?.message)
                        navigate('/products')
                    }
                })

        }
    })

    return (
        <Fragment>
            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
                    <h1>BEAUT INDIA</h1>
                    <h6 className='mb-3'>LOG IN</h6>

                    <Field
                        name='shop_id'
                        options={companies}
                        component={Select}
                        className='form-co'
                        disabled={isLoading}
                    />

                    <Field
                        type='password'
                        name='password'
                        component={Input}
                    />

                    <Button type="submit" className="loginbtn" label="Log in" />

                </form>
            </FormikProvider>
        </Fragment>
    )
}

export default LoginForm