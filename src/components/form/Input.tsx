import clsx from 'clsx'
import { ChangeEvent, useEffect, useRef } from 'react'

import styles from '@/styles/modules/Input.module.scss'

export type InputProps = {
  name?: string
  value?: string | number
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  type?:
    | 'text'
    | 'email'
    | 'password'
    | 'number'
    | 'date'
    | 'time'
    | 'datetime-local'
    | 'search'
    | 'tel'
    | 'url'
  placeholder?: string
  className?: string
  id?: string
  autoComplete?: string
  required?: boolean
  isFocused?: boolean
  disabled?: boolean
}

export default function Input({
  type = 'text',
  name,
  value,
  placeholder,
  id,
  className,
  autoComplete,
  required,
  isFocused,
  disabled,
  onChange,
}: InputProps) {
  const element = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isFocused && element.current) {
      element.current.focus()
    }
  }, [isFocused])

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      id={id}
      className={clsx(styles.input, className)}
      ref={element}
      autoComplete={autoComplete}
      required={required}
      disabled={disabled}
      onChange={(e) => onChange?.(e)}
    />
  )
}
