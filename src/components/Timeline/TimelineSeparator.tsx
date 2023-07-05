import { CSSProperties, ReactNode } from 'react'
import { composeClasses } from 'lib/classes'
import Flex from '../Layout/Flex/Flex'

export interface TimelineSeparatorProps {
  /**
   * The content of the component.
   */
  children?: ReactNode
  /**
   * Override or extend the classes applied to the component.
   */
  className?: string
  /**
   * Override or extend the styles applied to the component.
   */
  style?: CSSProperties
}

const TimelineSeparator = ({
  children,
  className,
  style
}: TimelineSeparatorProps) => {
  return (
    <Flex
      role="timeline-separator"
      alignItems="center"
      className={composeClasses('flex-col', className)}
      style={style}
    >
      {children}
    </Flex>
  )
}

export default TimelineSeparator
