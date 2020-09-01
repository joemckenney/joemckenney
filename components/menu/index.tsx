import React, { useRef } from 'react'

import Layout from '../layout'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

//Border 3F5F42
//color 212121
//divider e6e6e6

export const Menu = ({ children }: Props) => {
  const menuRef = useRef(null)

  return (
    <Layout type="vertical" style={{ background: 'pink' }} ref={menuRef}>
      {children}
    </Layout>
  )
}

export default Menu
