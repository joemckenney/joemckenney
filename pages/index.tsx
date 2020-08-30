import React from 'react'

import Layout from '../components/layout/'

import Menu from '../components/menu'
import MenuItem from '../components/menu/menu-item'
import MenuDivider from '../components/menu/menu-divider'

export default function Home() {
  return (
    <Layout inset={5}>
      <Menu>
        <MenuItem>Joe</MenuItem>
        <MenuItem>Leah</MenuItem>
        <MenuDivider />
        <MenuItem>Baobab</MenuItem>
        <MenuItem>Meeko</MenuItem>
      </Menu>
    </Layout>
  )
}
