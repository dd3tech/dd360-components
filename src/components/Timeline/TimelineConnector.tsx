import { CSSProperties } from 'react'
import { composeClasses } from 'lib/classes'

export interface TimelineConnectorProps {
  /**
   * Override or extend the classes applied to the component.
   */
  className?: string
  /**
   * Override or extend the styles applied to the component.
   */
  style?: CSSProperties
}

const TimelineConnector = ({ className, style }: TimelineConnectorProps) => {
  return (
    <div
      role="timeline-connector"
      className={composeClasses('flex-grow w-0.5 bg-gray-300', className)}
      style={{ minHeight: 12, ...style }}
    ></div>
  )
}

export default TimelineConnector
