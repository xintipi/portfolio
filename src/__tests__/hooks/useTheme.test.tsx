import { act, renderHook } from '@testing-library/react'
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'

import { ThemeEnum } from '@/enums/theme.enum'
import { ThemeProvider, useTheme } from '@/hooks/useTheme'

import { store } from '../../store'

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

const makeSut = () => {
  const wrapper = ({ children }: { children: ReactNode }) => (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  )
  return renderHook(() => useTheme(), { wrapper })
}

describe('useTheme()', () => {
  it('should return theme is light on initial state', () => {
    const { result } = makeSut()
    act(() => {
      expect(result?.current?.theme).toBe(ThemeEnum.LIGHT)
    })
  })

  it('should return theme dark when click', () => {
    const { result } = makeSut()
    act(() => {
      result.current?.toggleTheme(ThemeEnum.DARK)
    })
    expect(result.current?.theme).toBe(ThemeEnum.DARK)
  })

  it('should return theme light when click', () => {
    const { result } = makeSut()
    act(() => {
      result.current?.toggleTheme(ThemeEnum.LIGHT)
    })
    expect(result.current?.theme).toBe(ThemeEnum.LIGHT)
  })
})
