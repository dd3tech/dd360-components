import { CSSProperties, ReactNode } from 'react'
import { composeClasses } from 'lib/classes'

export interface TimelineOppositeContentProps {
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

const TimelineOppositeContent = ({
  children,
  className,
  style
}: TimelineOppositeContentProps) => {
  return (
    <div
      role="timeline-opposite-content"
      className={composeClasses('px-4 py-1.5 text-left flex-1', className)}
      style={style}
    >
      {children}
    </div>
  )
}

export default TimelineOppositeContent
