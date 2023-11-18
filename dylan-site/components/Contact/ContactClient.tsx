"use client";

import { sendEmail, FormData } from '@/hooks/send-email';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRef } from 'react';


export default function Contact() {

    const {
        register,
        handleSubmit,
        reset
    } = useForm<FormData>();

    const formRef = useRef<HTMLFormElement>(null);

    const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
        reset();
        sendEmail(data).then((res) => {
            alert(res?.message);
        }).catch((err) => {
            console.log(err);
        })
    }



    return (
        <div className="px-5 max-w-[1060px] mx-auto min-h-[calc(100dvh-48px)] flex flex-col justify-center">
            <p className="mx-auto font-semibold text-xl">Contact Me</p>
            <form className="flex flex-col coolinput sm:mx-auto sm:min-w-[50%] " onSubmit={handleSubmit(onSubmit)} ref={formRef}>
                {/* H o n e y p o t */}
                <label className="lkjkljf" htmlFor="name"></label>
                <input className="lkjkljf" tabIndex={5} autoComplete="off" type="text" id="name" placeholder="name" {...register('name')} />
                <label className="lkjkljf" htmlFor="email"></label>
                <input className="lkjkljf" tabIndex={6} autoComplete="off" type="text" id="email" placeholder="e-mail" {...register('email')} />
                <label className="lkjkljf" htmlFor="message"></label>
                <textarea className="lkjkljf" tabIndex={7} autoComplete="off" id="message" placeholder="message" {...register('message')} />
                {/* F o r m */}
                <label className="text" htmlFor="nameaksljf">Name</label>
                <input className="input" tabIndex={1} autoComplete="off" type="text" id="nameksljf" placeholder="name" maxLength={100} {...register('nameksljf')} />
                <label className="text" htmlFor="emaillkjkl">E-mail</label>
                <input className="input" tabIndex={2} autoComplete="off" type="text" id="emaillkjkl" placeholder="e-mail" {...register('emaillkjkl')} />
                <label className="text" htmlFor="messagelkjkl">Message</label>
                <textarea className="input max-h-44 h-16 min-h-fit" tabIndex={3} autoComplete="off" id="message" placeholder="message" {...register('messagelkjkl')} />
                <button type="submit" tabIndex={4} className="w-fit mx-auto bg-white/10 px-5 py-2 rounded-full hover:bg-primary-1 hover:text-black mt-2 transition duration-400 ease-in-out">Send</button>
            </form>
        </div>

    )

}