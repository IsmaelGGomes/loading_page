import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.png';
import Link from './Link';

type Props = {
    selectPage: string;
    setSelectPage: (value: string) => void;
}

const Navbar = ({
    selectPage,
    setSelectPage
}: Props) => {
    const flexBetween = 'flex items-center justify-between';
    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        <img src={Logo} alt="logo" />
                        <div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                <Link
                                    page="Home"
                                    selectPage={selectPage}
                                    setSelectPage={setSelectPage}
                                />
                                <Link page="Beneficios"
                                    selectPage={selectPage}
                                    setSelectPage={setSelectPage}
                                />
                                <Link page="Outras Classes"
                                    selectPage={selectPage}
                                    setSelectPage={setSelectPage}
                                />
                                <Link page="Contate-nos"
                                    selectPage={selectPage}
                                    setSelectPage={setSelectPage}
                                />
                            </div>
                            <div className={`${flexBetween} gap-8`}>
                                <p>Entre aqui</p>
                                <button> Seja menbro</button>
                            </div>
                            <div className="">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;