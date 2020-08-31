import React from 'react'

import styles from './button.module.css'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ariaControls?: string
  ariaExpanded?: boolean
  ariaLabel?: string
  ariaPressed?: boolean
  children: React.ReactNode
  id?: string
  onBlur?(): void
  onClick?(): void
  onFocus?(): void
  onKeyDown?(event: React.KeyboardEvent<HTMLButtonElement>): void
  onKeyPress?(event: React.KeyboardEvent<HTMLButtonElement>): void
  onKeyUp?(event: React.KeyboardEvent<HTMLButtonElement>): void
  onMouseEnter?(): void
  onMouseUp?(): void
  onTouchStart?(): void
  size?: 'small' | 'medium' | 'large'
}

const Button = React.forwardRef(
  (
    {
      ariaControls,
      ariaExpanded,
      ariaLabel,
      ariaPressed,
      children,
      id,
      onBlur,
      onClick,
      onFocus,
      onKeyDown,
      onKeyPress,
      onKeyUp,
      onMouseEnter,
      onMouseUp,
      onTouchStart,
      type = 'button',
      ...attrs
    }: Props,
    ref: React.Ref<HTMLButtonElement>
  ) => {
    return (
      <button
        {...attrs}
        aria-controls={ariaControls}
        aria-expanded={ariaExpanded}
        aria-label={ariaLabel}
        aria-pressed={ariaPressed}
        className={styles.button}
        id={id}
        onBlur={onBlur}
        onClick={onClick}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        onKeyPress={onKeyPress}
        onKeyUp={onKeyUp}
        onMouseEnter={onMouseEnter}
        onMouseUp={onMouseUp}
        onTouchStart={onTouchStart}
        ref={ref}
        type={type}
      >
        {children}
      </button>
    )
  }
)

export default Button
