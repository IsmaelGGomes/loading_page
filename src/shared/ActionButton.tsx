import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectPage } from './types';

type Props = {
    children: React.ReactNode;
    setSelectPage: (value: SelectPage) => void;
}

const ActionButton = ({ children, setSelectPage }: Props) => {
    return (
        <AnchorLink
            className='rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white'
            onClick={()=> setSelectPage(SelectPage.ContactUs)}
            href={`#${SelectPage.ContactUs}`}
        >
            {children}
        </AnchorLink>
    )
}

export default ActionButton