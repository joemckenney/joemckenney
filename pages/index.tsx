import React from 'react'

import Layout from '../components/layout/'

import Menu from '../components/menu'
import MenuItem from '../components/menu/menu-item'
import MenuDivider from '../components/menu/menu-divider'
import Text from '../components/text'
import RelativeBox from '../components/relative-box'
import Activator from '../components/activator'
import Button from '../components/button'

import { Alignment, Placement } from '../components/position'

export default function Home() {
  return (
    <Layout type="vertical" inset={5}>
      <Layout type="horizontal" flex="static">
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
          <Button>
            <Text>CLICK ME</Text>
          </Button>
        </Activator>
      </Layout>
    </Layout>
  )
}
