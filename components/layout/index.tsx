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

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  inset?: number
  spacing?: number
  type?: Type
  flex?: Flex
}

const Layout = React.forwardRef(
  (
    {
      children,
      inset,
      spacing,
      type = Type.Horizontal,
      flex = Flex.Auto,
      ...attrs
    }: Props,
    ref
  ) => {
    return (
      <div
        {...attrs}
        className={styles.layout}
        data-flex={flex}
        data-inset={inset}
        data-spacing={spacing}
        data-type={type}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

export default Layout
