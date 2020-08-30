import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

import position, { Alignment, Placement } from '../position'

interface Props {
  activator: React.Ref<HTMLDivElement>
  alignment: Alignment
  children: React.ReactNode
  placement: Placement
}

const RelativeBox = ({ activator, alignment, children, placement }: Props) => {
  let box: HTMLDivElement = document.createElement('div')
  useEffect(() => {
    box = document.createElement('div')
    document.body.appendChild(box)
    return function remove() {
      document.body.removeChild(box)
    }
  })
  //
  useEffect(() => {
    position({
      activator: activator.current,
      alignment,
      box,
      placement,
    })
  })

  return ReactDOM.createPortal(children, box)
}

export default RelativeBox
