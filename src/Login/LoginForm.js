import React from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext';

import Button from '../Componets/Forms/Button';
import Input from '../Componets/Forms/Input';
import useForm from '../Hooks/useForm';

import styles from './LoginForm.module.css';
import stylesBtn from '../Componets/Forms/Button.module.css';
import Head from '../Componets/Helper/Head';

const LoginForm = () => {
    const username = useForm();
    const password = useForm();

    const { userLogin, error, loading } = React.useContext(UserContext);

    async function handleSubmit(event){
        event.preventDefault();

        if(username.validate() && password.validate()){
            userLogin(username.value, password.value);
        }

    }
    
    return (
        <section className='animeLeft'>
            <Head title="Login" />
            <h1 className='title'>Login</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <Input label="Usuário" type="text" name="username" {...username}/>
                <Input label="Senha" type="password" name="password" {...password}/>
                {loading ? <Button disabled>Carregando...</Button> :
                    <Button>Entrar</Button>
                }
                
                {error && 'Dados incorretos'}
            </form>
            <Link className={styles.perdeu} to='/login/perdeu'>Esqueceu a senha?</Link>
            <div className={styles.cadastro}>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <p>Ainda não possui conta? Faça um cadastro</p>
            </div>
            <Link  className={stylesBtn.button} to='/login/criar'>Cadastro</Link>
        </section>
    )
}

export default LoginForm
