import { CSSProperties, ReactNode } from 'react'
import { composeClasses } from 'lib/classes'

export interface TimelineContentProps {
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

const TimelineContent = ({
  children,
  className,
  style
}: TimelineContentProps) => {
  return (
    <div
      role="timeline-content"
      className={composeClasses('px-4 py-1.5 text-right flex-1', className)}
      style={style}
    >
      {children}
    </div>
  )
}

export default TimelineContent
