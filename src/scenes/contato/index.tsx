import Htext from '@/shared/Htext';
import { SelectPage } from '@/shared/types'
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import React from 'react'
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";

type Props = {
    setSelectPage: (value: SelectPage) => void;
}

const Contate_nos = ({ setSelectPage }: Props) => {

    const inputStyles = `w-full rounded-lg bg-primary-500 px-5 py-3 placeholder-white mt-5`;

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefalut();
        }
    };

    return (
        <section className='mx-auto w-5/6 pt-24 pb-32' id='contate-nos'>
            <motion.div
                className=""
                onViewportEnter={() => setSelectPage(SelectPage.ContactUs)}
            >
                <motion.div
                    className='md:3/5'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <Htext>
                        {" "} VAMO METE O SHAPE
                        <span className='text-primary-500'> AGORA</span>
                    </Htext>
                    <p className='my-5'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
                        sequi autem adipisci
                        architecto. Exercitationem recusandae esse et quasi quo laudantium magni quae
                    </p>
                </motion.div>
                {/* FORMULARIO E IMAGEM */}

                <div className="mt-10 justify-between gap-8 md:flex">
                    <motion.div
                        className='mt-10 basis-3/5 md:mt-0'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <form
                            action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
                            target='_blank'
                            onSubmit={onSubmit}
                            method="POST"
                        >
                            <input
                                type="text"
                                className={inputStyles}
                                placeholder="NAME"
                                {...register("name", {
                                    required: true,
                                    maxLength: 100,
                                })}
                            />
                            {errors.name && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.name.type === "required" && "O campo é requerido !"}
                                    {errors.name.type === "maxLength" && "O campo passou o limite de caracteres !"}
                                </p>
                            )}
                            <input
                                type="text"
                                className={inputStyles}
                                placeholder="EMAIL"
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                            />
                            {errors.email && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.email.type === "required" && "O campo é requerido !"}
                                    {errors.email.type === "pattern" && "Email invalido !"}
                                </p>
                            )}
                            <textarea
                                rows={4}
                                cols={50}
                                className={inputStyles}
                                placeholder="MESSAGE"
                                {...register("message", {
                                    required: true,
                                    maxLength: 2000,
                                })}
                            />
                            {errors.message && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.message.type === "required" && "O campo é requerido !"}
                                    {errors.message.type === "maxLength" && "O campo passou o limite de caracteres !"}
                                </p>
                            )}

                            <button
                                type="submit"
                                className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'
                            >
                                ENVIE
                            </button>
                        </form>
                    </motion.div>
                    <motion.div
                        className='relative mt-16 basis-2/5 md:mt-0'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0.5 },
                        }}
                    >
                        <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                            <img 
                            src={ContactUsPageGraphic} 
                            alt="contact-us-page" 
                            className='w-full'
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Contate_nos