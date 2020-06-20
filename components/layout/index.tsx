import React from 'react'
import styles from './layout.module.css'

enum Type {
  Vertical = 'vertical',
  Horizontal = 'horizontal',
}

enum Flex {
  Initial = 'initial',
  Static = 'static',
  Auto = 'auto',
}

interface Props {
  children: React.ReactChild
  inset?: number
  spacing?: number
  type?: Type
  flex?: Flex
}

function Layout({
  children,
  inset,
  spacing,
  type = Type.Horizontal,
  flex = Flex.Auto,
  ...attrs
}: Props) {
  return (
    <div
      {...attrs}
      className={styles.layout}
      data-flex={flex}
      data-inset={inset}
      data-spacing={spacing}
      data-type={type}
    >
      {children}
    </div>
  )
}

export default Layout
