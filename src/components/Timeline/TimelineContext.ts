import { Dispatch, SetStateAction, createContext, useContext } from 'react'
import { TimeLinePosition } from './Timeline'

interface IContext {
  position: TimeLinePosition
  left: boolean
  setLeft: Dispatch<SetStateAction<boolean>>
}

const TimelineContext = createContext<IContext>({} as IContext)

export const TimelineProvider = TimelineContext.Provider
export const useTimelineContext = () => useContext(TimelineContext)
