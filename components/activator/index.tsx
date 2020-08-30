import React, { useRef, useState } from 'react'
import Layout from '../layout'
//import styles from './layout.module.css'

interface Props {
  children: Function
  onClick: Function
  onClose: Function
  onMouseOver: Function
  renderProp: Function
}

function Activator({
  children,
  onClick,
  onClose,
  onMouseOver,
  renderProp,
}: Props) {
  const activatorRef = useRef<Element>(null)
  const [isOpen, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!isOpen)
    onClick()
  }

  const handleMouseOver = () => {
    setOpen(!isOpen)
    onMouseOver()
  }

  const handleClose = () => {
    setOpen(false)
    onClose()
  }

  return (
    <Layout
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      ref={activatorRef}
    >
      {children({ activator: activatorRef, onClose: handleClose })}
      {isOpen && renderProp({ activator: activatorRef })}
    </Layout>
  )
}

export default Activator
