import { CSSProperties, ReactElement, ReactNode } from 'react'
import { composeClasses } from 'lib/classes'
import { useTimelineContext } from './TimelineContext'
import { Position } from './Timeline'

export interface TimelineItemProps {
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
  /**
   * The position of the main content of the item.
   */
  position?: Omit<Position, 'alternate'>
}

const TimelineItem = ({
  children,
  position,
  className,
  style
}: TimelineItemProps) => {
  const { position: positionMain } = useTimelineContext()
  const [OppositeContent, Separator, Content] = children as ReactElement[]
  const isLeft = (position ?? positionMain) === 'left'

  return (
    <li
      role="timeline-item"
      className={composeClasses('flex w-full', className)}
      style={{ minHeight: 70, ...style }}
    >
      {isLeft ? Content : OppositeContent}
      {Separator}
      {isLeft ? OppositeContent : Content}
    </li>
  )
}

export default TimelineItem
