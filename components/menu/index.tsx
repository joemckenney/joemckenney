import React, { useRef } from 'react'

import Layout from '../layout'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const Menu = ({ children }: Props) => {
  const menuRef = useRef(null)

  return (
    <Layout type="vertical" ref={menuRef}>
      {children}
    </Layout>
  )
}

export default Menu
