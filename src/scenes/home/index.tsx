import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectPage } from '@/shared/types'
import React from 'react';
import ActionButton from '@/shared/ActionButton';
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';


type Props = {
    setSelectPage: (value: SelectPage) => void;
}

const Home = ({ setSelectPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

    return (
        <section id='home' className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
            {/* imagem cabeça do header */}
            <motion.div 
            className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
            onViewportEnter={() => setSelectPage(SelectPage.Home)}
            >
                <div className="z-10 mt-32 md:basis-3/5">
                    {/* escopos */}
                    <motion.div
                        className="md:-mt-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <div className="relative ">
                            <div className="before:absolute before:-top-20 before:content-evolvetext before:-left-20 before:z-[-1]">
                                <img src={HomePageText} alt="home-page-text" />
                            </div>
                        </div>
                        <p className='mt-8 text-sm' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                            iusto unde ea accusamus natus illo eaque error consequatur,
                            minus nihil, eius amet
                            cupiditate molestiae. Nemo delectus omnis praesentium minus voluptatem?
                        </p>
                    </motion.div>

                    <motion.div
                        className="mt-8 flex items-center gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay:0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <ActionButton setSelectPage={setSelectPage}>
                            Entre agora
                        </ActionButton>
                        <AnchorLink
                            className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
                            onClick={() => setSelectPage(SelectPage.ContactUs)}
                            href={`#${SelectPage.ContactUs}`}
                        >
                            <p>Leia mais</p>
                        </AnchorLink>
                    </motion.div>
                </div>
                {/* imagem */}
                <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                    <img src={HomePageGraphic} alt="home-pageGraphic" />
                </div>
            </motion.div>
            {isAboveMediumScreens && (
                <div className="h-[150px] w-full bg-primary-100 py-10">
                    <div className="mx-auto w-5/6">
                        <div className="flex w-3/5 items-center justify-between gap-8">
                            <img src={SponsorRedBull} alt="redbull" />
                            <img src={SponsorForbes} alt="forbes" />
                            <img src={SponsorFortune} alt="fortune" />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Home