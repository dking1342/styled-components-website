import React from 'react'
import Layout from '../../components/layout/Layout'
import { Container, Form, FormButton, FormContent, Formh1, FormInput, FormLabel, FormWrap, Text } from './SignupElements'

interface SignupProps {

}

const Signup: React.FC<SignupProps> = () => {
    return(
        <Layout>
            <Container>
                <FormWrap>
                    <FormContent>
                        <Form action="#">
                            <Formh1>Sign in to your account</Formh1>
                            <FormLabel htmlFor='for' >Email</FormLabel>
                            <FormInput type="email" required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type="password" required />
                            <FormButton type="submit">Continue</FormButton>
                            <Text>Forgot password?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </Layout>
    )
}

export default Signup