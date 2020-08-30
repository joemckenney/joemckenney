import React from 'react'

import Layout from '../components/layout/'

import Menu from '../components/menu'
import MenuItem from '../components/menu/menu-item'
import MenuDivider from '../components/menu/menu-divider'
import Text from '../components/text'
import RelativeBox from '../components/relative-box'
import Activator from '../components/activator'

import { Alignment, Placement } from '../components/position'

export default function Home() {
  return (
    <Layout inset={5}>
      <Activator
        render={({ activator }: { activator: any }) => (
          <RelativeBox
            activator={activator}
            alignment={Alignment.Left}
            placement={Placement.Bottom}
          >
            <Menu>
              <MenuItem>Joe</MenuItem>
              <MenuItem>Leah</MenuItem>
              <MenuDivider />
              <MenuItem>Baobab</MenuItem>
              <MenuItem>Meeko</MenuItem>
            </Menu>
          </RelativeBox>
        )}
      >
        <Layout flex="static">
          <Text>CLICK ME</Text>
        </Layout>
      </Activator>
    </Layout>
  )
}
