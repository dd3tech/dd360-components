import { CSSProperties, HTMLAttributes, ReactNode, useState } from 'react'
import { composeClasses } from 'lib/classes'
import TimelineConnector from './TimelineConnector'
import TimelineOppositeContent from './TimelineContent'
import TimelineDot from './TimelineDot'
import TimelineItem from './TimelineItem'
import TimelineContent from './TimelineOppositeContent'
import TimelineSeparator from './TimelineSeparator'
import { TimelineProvider } from './TimelineContext'
import './timeline.css'

export type TimeLinePosition = 'left' | 'right' | 'alternate'

export interface TimelineProps extends HTMLAttributes<HTMLUListElement> {
  /**
   * The content of the component.
   */
  children?: ReactNode
  /**
   * The position of the main content of the items.
   * @default 'alternate'
   */
  position?: TimeLinePosition
  /**
   * Override or extend the classes applied to the component.
   */
  className?: string
  /**
   * Override or extend the styles applied to the component.
   */
  style?: CSSProperties
}

const Timeline = ({
  children,
  position = 'alternate',
  className,
  style,
  ...props
}: TimelineProps) => {
  const [left, setLeft] = useState(false)

  return (
    <TimelineProvider value={{ position, left, setLeft }}>
      <ul
        role="timeline"
        {...props}
        className={composeClasses(
          'timeline-cmpnt flex flex-col px-4 py-1.5 items-center',
          position,
          className
        )}
        style={style}
      >
        {children}
      </ul>
    </TimelineProvider>
  )
}

Timeline.Connector = TimelineConnector
Timeline.Content = TimelineContent
Timeline.Dot = TimelineDot
Timeline.Item = TimelineItem
Timeline.OppositeContent = TimelineOppositeContent
Timeline.Separator = TimelineSeparator

Timeline.displayName = 'Timeline'

export default Timeline
