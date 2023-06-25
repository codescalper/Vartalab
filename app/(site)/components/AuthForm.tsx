'use client';
import {useCallback,useState} from "react";
import {FieldValues, SubmitHandler, useForm } from 'react-hook-form'
type Variant = 'LOGIN' | 'REGISTER'
const AuthForm= () =>{
    const [variant,setVariant] = useState<Variant>('LOGIN');
    const [isLoading,setisLoading] = useState(false)
    const toggleVariant = useCallback(()=>{
            if(variant ==='LOGIN'){
                setVariant('REGISTER')
            }else{
                setVariant('LOGIN')
            }
    },[variant]);

    const {register,handleSubmit,formState:{
         errors
    }} = useForm<FieldValues>({
        defaultValues:{
            name: '',
            email: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues>=(data) =>{
        setisLoading(true); 
        if(variant === 'REGISTER'){
            //Axios Register
        }else{
            //NextAuth  SignIn
        }
        }
     
    return (
        <div className="mt-8 sm:max-auto sm:w-full sm:max-w-md">

                <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">

                </div>
        </div>


    );

}

export default AuthForm 