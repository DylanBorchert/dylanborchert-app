"use client";
import { sendEmail, FormData } from '@/hooks/send-email';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRef, useEffect } from 'react';
import classnames from 'classnames';
import Footer from '../../components/Footer';

export default function Contact() {

    const formRef = useRef<HTMLFormElement>(null);

    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: { errors }
    } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        const fields: { key: keyof FormData; message: string }[] = [
            { key: 'nameksljf', message: 'Please provide a name' },
            { key: 'emaillkjkl', message: 'Please provide an email' },
            { key: 'messagelkjkl', message: 'Please provide a message' },
        ];

        let hasError = false;

        fields.forEach(({ key, message }) => {
            if (!data[key]) {
                setError(key, {
                    type: 'manual',
                    message,
                });
                hasError = true;
            }
        });

        if (hasError) return;

        sendEmail(data).then((res) => {
            if (res.message) {
                alert(res.message);
                reset();
            } else {
                alert('Something went wrong, please try again later');
            }
        });
    };


    return (
        <div className="px-5 max-w-[1290px] mx-auto min-h-[calc(100dvh-48px)] flex flex-col justify-center">
            <div className='flex-grow'></div>
            <p className="mx-auto font-semibold text-xl">Contact Me</p>
            <form className="flex flex-col coolinput sm:mx-auto sm:min-w-[50%] " onSubmit={handleSubmit(onSubmit)} ref={formRef}>
                {/* H o n e y p o t */}
                <label className="lkjkljf" htmlFor="name">Name</label>
                <input className="lkjkljf" tabIndex={5} autoComplete="off" type="text" id="name" placeholder="name" {...register('name')} />
                {errors.name && <p className='lkjkljf'>{errors.name.message}</p>}
                <label className="lkjkljf" htmlFor="email">E-mail</label>
                <input className="lkjkljf" tabIndex={6} autoComplete="off" type="text" id="email" placeholder="e-mail" {...register('email')} />
                {errors.email && <p className='lkjkljf'>{errors.email.message}</p>}
                <label className="lkjkljf" htmlFor="message">Message</label>
                <textarea className="lkjkljf" tabIndex={7} autoComplete="off" id="message" placeholder="message" {...register('message')} />
                {errors.message && <p className='lkjkljf'>{errors.message.message}</p>}
                {/* F o r m */}
                <label className={classnames("text", { "missing": errors.nameksljf })} htmlFor="nameksljf">Name<sup className='text-primary-2'> *</sup></label>
                <input className={classnames("input", { "missing": errors.nameksljf })} tabIndex={1} autoComplete="off" type="text" id="nameksljf" placeholder="name" maxLength={100} {...register("nameksljf")} />
                {errors.nameksljf && <p className='text-xs text-primary-2 para'>{errors.nameksljf.message}</p>}
                <label className={classnames("text", { "missing": errors.emaillkjkl })} htmlFor="emaillkjkl">E-mail<sup className='text-primary-2'> *</sup></label>
                <input className={classnames("input", { "missing": errors.emaillkjkl })} tabIndex={2} autoComplete="off" type="text" id="emaillkjkl" placeholder="e-mail" {...register('emaillkjkl')} />
                {errors.emaillkjkl && <p className='text-xs text-primary-2 para'>{errors.emaillkjkl.message}</p>}
                <label className={classnames("text", { "missing": errors.messagelkjkl })} htmlFor="messagelkjkl">Message<sup className='text-primary-2'> *</sup></label>
                <textarea className={classnames("input max-h-44 h-16 min-h-fit", { "missing": errors.messagelkjkl })} tabIndex={3} autoComplete="off" id="message" placeholder="message" {...register('messagelkjkl')} />
                {errors.messagelkjkl && <p className='text-xs text-primary-2 para'>{errors.messagelkjkl.message}</p>}
                <input type="submit" value="Send" tabIndex={4} className="w-fit mx-auto dark:bg-white/10 bg-black/10 px-5 py-2 rounded-full hover:bg-primary-1 hover:text-black mt-2 transition duration-400 ease-in-out hover:cursor-pointer" />
            </form>
            <div className='flex-grow'></div>
            <Footer />
        </div>

    )

}