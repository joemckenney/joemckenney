import React from 'react'

import Layout from '../components/layout/'

import Menu from '../components/menu'
import MenuItem from '../components/menu/menu-item'
import MenuDivider from '../components/menu/menu-divider'
import Text from '../components/text'
import Button from '../components/button'
import ContextMenu from '../components/contextmenu'

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
      <Layout style={{ background: 'grey' }} />
      <Layout
        flex="static"
        inset={1}
        style={{
          background: 'linear-gradient(to bottom, #3D3E3D, #000000, #3D3E3D)',
        }}
      >
        <Layout flex="static" style={{ background: 'darkgreen' }}>
          <Button>
            <Text>Start</Text>
          </Button>
        </Layout>
        <Layout />
      </Layout>
    </Layout>
  )
}
