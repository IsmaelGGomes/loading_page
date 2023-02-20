import { SelectPage } from '@/shared/types';
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    page: string;
    selectPage: SelectPage;
    setSelectPage: (value: SelectPage) => void;
}

const Link = ({
    page,
    selectPage,
    setSelectPage
}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectPage
  return (
    <AnchorLink
    className={`${selectPage === lowerCasePage ? "text-primary-500" : ""}
        transition duration-500 hover:text-primary-300
    `}
    href={`#${lowerCasePage}`}
    onClick={()=> setSelectPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
  )
}

export default Link