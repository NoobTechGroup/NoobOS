import React, { useState, useEffect } from 'react'
import Form from '../Components/Form'
import Input from '../Components/Input'

export default function Login() {
    return (
        <div>
            <h2>Login</h2>
            <Form>
                <Input
                    type='email'
                />
                <Input
                    type='password'
                />
                <Input
                    type='checkbox'
                    label='Remember me'
                />
                <Input
                    type='submit'
                />
            </Form>
            <a>Forgot Password?</a>
        </div>
    )
}
