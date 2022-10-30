/// <reference types="gtag.js" />

import { ReactNode } from 'react'
import { TooltipProps as Props } from 'react-tippy'

declare module 'react-tippy' {
  export interface TooltipProps extends Props {
    children: ReactNode
  }
}

declare module 'gtag.js'
