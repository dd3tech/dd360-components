import { CSSProperties, ReactNode } from 'react'
import { UnitCSS } from '../../interfaces'
import { composeClasses } from 'lib/classes'
import Flex from '../Layout/Flex/Flex'

export type TimeLineDotColor =
  | 'primary'
  | 'warning'
  | 'info'
  | 'success'
  | 'error'

export const getDotColor: {
  [key in TimeLineDotColor]: { bg: string; border: string }
} = {
  primary: {
    bg: 'bg-primary',
    border: 'border-primary'
  },
  warning: {
    bg: 'bg-warning',
    border: 'border-warning'
  },
  info: {
    bg: 'bg-blue-500',
    border: 'border-blue-500'
  },
  success: {
    bg: 'bg-green-500 ',
    border: 'border-green-500'
  },
  error: {
    bg: 'bg-red-500',
    border: 'border-red-500'
  }
}

export type TimeLineDotVariant = 'filled' | 'outlined'

export interface TimelineDotProps {
  /**
   * The content of the component.
   */
  children?: ReactNode
  /**
   * Override or extend the classes applied to the component.
   */
  className?: string
  /**
   * Color del borde o relleno del Dot
   * @default 'primary'
   */
  color?: TimeLineDotColor
  /**
   * Variant del Dot
   * @default 'filled'
   */
  variant?: TimeLineDotVariant
  /**
   * Dot width
   */
  width?: UnitCSS
  /**
   * Dot height
   */
  height?: UnitCSS
  /**
   * Override or extend the styles applied to the component.
   */
  style?: CSSProperties
}

const TimelineDot = ({
  children,
  className,
  variant = 'filled',
  color = 'primary',
  style,
  height,
  width
}: TimelineDotProps) => {
  const colorClass = getDotColor[color]

  return (
    <Flex
      role="timeline-dot"
      justifyContent="center"
      alignItems="center"
      className={composeClasses(
        'rounded-full border-2 p-1 my-3',
        variant === 'filled' && colorClass.bg,
        colorClass.border,
        className
      )}
      style={{ color, height, width, ...style }}
    >
      {children}
    </Flex>
  )
}

export default TimelineDot
