import React from 'react'

import Layout from '../components/layout/'

import Menu from '../components/menu'
import MenuItem from '../components/menu/menu-item'
import MenuDivider from '../components/menu/menu-divider'
import Button from '../components/button'
import ContextMenu from '../components/contextmenu'
import Clock from '../components/clock'

export default function Home() {
  return (
    <Layout type="vertical">
      <ContextMenu>
        <Menu>
          <MenuItem>JoeJoeJoeJoeJoeJoeJoeJoe</MenuItem>
          <MenuItem>Leah</MenuItem>
          <MenuDivider />
          <MenuItem>Baobab</MenuItem>
          <MenuItem>Meeko</MenuItem>
          <MenuDivider />
          <MenuItem>Baobab</MenuItem>
          <MenuDivider />
          <MenuItem>Baobab</MenuItem>
          <MenuItem>Baobab</MenuItem>
        </Menu>
      </ContextMenu>
      <Layout style={{ backgroundColor: '#0E0E0E' }} />
      <Layout
        flex="static"
        inset={1}
        style={{
          background: 'linear-gradient(to bottom, #3D3E3D, #000000, #3D3E3D)',
        }}
      >
        <Layout flex="static" style={{ background: '#e6e6e6' }}>
          <Button></Button>
        </Layout>
        <Layout />
        <Layout style={{ color: '#e6e6e6' }} flex="static">
          <Clock />
        </Layout>
      </Layout>
    </Layout>
  )
}
