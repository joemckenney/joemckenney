import React, { useMemo, useEffect, useRef } from 'react'

import Layout from '../layout'

/*
import MenuItem from './MenuItem'
import MenuDivider from './MenuDivider'
import MenuGroup from './MenuGroup'
ijmport MenuOption from './MenuOption'
import MenuOptionsGroup from './MenuOptionsGroup'
*/

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const Menu = ({ children }: Props) => {
  const menuRef = useRef(null)

  //useEffect(() => {}, [menuRef])

  return (
    <Layout data-id="menu" ref={menuRef}>
      {children}
    </Layout>
  )
}

export default Menu
