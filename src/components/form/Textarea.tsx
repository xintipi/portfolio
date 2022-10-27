import clsx from 'clsx'
import { ChangeEvent, useEffect, useRef } from 'react'

import styles from '@/styles/modules/Textarea.module.scss'

export type TextAreaProps = {
  name?: string
  value?: string | number
  rows?: number
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
  id?: string
  className?: string
  autoComplete?: string
  required?: boolean
  isFocused?: boolean
  disabled?: boolean
  help?: string
  error?: string
}

export default function TextArea({
  name,
  value,
  rows = 5,
  placeholder,
  id,
  className,
  autoComplete,
  required,
  isFocused,
  disabled,
  onChange,
}: TextAreaProps) {
  const element = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (isFocused && element.current) {
      element.current.focus()
    }
  }, [isFocused])

  return (
    <textarea
      name={name}
      placeholder={placeholder}
      id={id}
      value={value}
      className={clsx(styles.textarea, className)}
      ref={element}
      autoComplete={autoComplete}
      required={required}
      disabled={disabled}
      onChange={(e) => onChange?.(e)}
      rows={rows}
    />
  )
}
