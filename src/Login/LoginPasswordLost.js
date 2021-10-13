import React from 'react';
import { PASSWORD_LOST } from '../api';
import Button from '../Componets/Forms/Button';
import Input from '../Componets/Forms/Input';
import Error from '../Componets/Helper/Error';
import useFetch from '../Hooks/useFetch';
import useForm from '../Hooks/useForm';

const LoginPasswordLost = () => {

    const email = useForm();
    const {data, loading, error, request} = useFetch();

    async function handleSubmit(e){
        e.preventDefault();
        if(email.validate()){
            const {url, options} = PASSWORD_LOST({login: email.value, url: window.location.href.replace('perdeu', 'resetar')});
            const {json} = await request(url, options);
        }
    }

    return (
        <section className='animeLeft'>
            <h1 className='title'>Esqueceu sua senha?</h1>
            {data ? 
                <p style={{color: '#4c1'}}>{data}</p> 
                : 
               ( <form onSubmit={handleSubmit}>
                    <Input label="Email ou Usuário" type="text" name="email" {...email}/>
                    {loading ?
                        <Button disabled>Enviando...</Button>
                     : 
                        <Button>Enviar email</Button>
                     }
                </form>)
            }
                <Error error={error} />
        </section>
    )
}

export default LoginPasswordLost
