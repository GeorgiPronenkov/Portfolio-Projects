import React from 'react';
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,FormInput,
    FormButton,
    Text
} from "./SignUpElements";

const SignUp = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/"> icon </Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign up now...</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormLabel htmlFor='for'>Confirm Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Submit</FormButton>
                            <Text>Forgot password?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default SignUp;
