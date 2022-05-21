import { useContext } from 'react';
import style from './cadatro.module.css'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { ContextApi } from '../../contextApi/contextApi'

const ValidarCampos = yup.object({
    nome: yup.string().required(),
    email: yup.string().email().required(),
    telefone: yup.string().required(),
    nascimento: yup.date().required(),
}).required();



function NovoEstagiario() {

    const { NovoEstagiario } = useContext(ContextApi)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(ValidarCampos)
    });
    const onSubmit = data => NovoEstagiario(data);

    return (
        <section className={style.cadastro} >
            <main className={style.cadastro_body} >
                <h1 className={style.cadastro_body_titulo} > CADASTRO</h1>
                <form className={style.cadastro_body_form} onSubmit={handleSubmit(onSubmit)}  >
                    <div className={style.cadastro_body_form_input}  >
                        <label>
                            Nome
                        </label>
                        <input {...register("nome")} name='nome' type='text' />
                        <p>{errors.nome?.message}</p>
                    </div>
                    <div className={style.cadastro_body_form_input}  >
                        <label>
                            E-mail
                        </label>
                        <input {...register("email")} name='email' type='text' />
                        <p>{errors.email?.message}</p>
                    </div>
                    <div className={style.cadastro_body_form_input}  >
                        <label>
                            Nascimento
                        </label>
                        <input {...register("nascimento")} name='nascimento' type='text' />
                        <p>{errors.nascimento?.message}</p>
                    </div>
                    <div className={style.cadastro_body_form_input}  >
                        <label>
                            Telefone
                        </label>
                        <input {...register("telefone")} name='telefone' type='text' />
                        <p>{errors.telefone?.message}</p>
                    </div>
                    <div className={style.cadastro_body_form_btn} >
                        <button className={style.cadastro_body_form_button}>CADASTRAR</button>
                    </div>
                </form>
            </main>
        </section >
    )

}

export default NovoEstagiario
