import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TagIcon, HomeIcon } from '@heroicons/react/outline'
import Text from '../components/Typography'
import TimelineComp from '../components/Timeline'

export default {
  title: 'Components/Timeline',
  component: TimelineComp
} as ComponentMeta<typeof TimelineComp>

const data = [
  {
    titleContent: 'JUNARY',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    oppositeContent: 'Lorem ipsum dolor sit',
    icon: <TagIcon className="w-5 h-5" />,
    dot: {
      variant: 'outlined',
      color: 'warning'
    }
  },
  {
    titleContent: 'FEBRUARY',
    icon: <TagIcon className="w-5 h-5" />,
    dot: {
      variant: 'outlined',
      color: 'error'
    }
  },
  {
    titleContent: 'MARCH',
    content: 'Lorem ipsum dolor sit amet consectetur',
    titleOppositeContent: '14:10 pm',
    icon: <TagIcon className="w-5 h-5" />,
    dot: {
      variant: 'outlined',
      color: 'success'
    }
  },
  {
    titleContent: 'APRIL',
    content: 'Quisquam, voluptatum.',
    titleOppositeContent: '14:10 pm',
    icon: <HomeIcon className="w-5 h-5 text-white" />
  }
]

const BasicTemplate: ComponentStory<typeof TimelineComp> = (args) => {
  return (
    <TimelineComp {...args}>
      {data.map((data, index) => (
        <TimelineComp.Item key={index}>
          <TimelineComp.OppositeContent>
            <Text size="sm" className="text-gray-500">
              {data.titleOppositeContent}
              <p>{data.oppositeContent}</p>
            </Text>
          </TimelineComp.OppositeContent>

          <TimelineComp.Separator>
            <TimelineComp.Dot />
            <TimelineComp.Connector />
          </TimelineComp.Separator>

          <TimelineComp.Content>
            <Text bold>{data.titleContent}</Text>
            <p>{data.content}</p>
          </TimelineComp.Content>
        </TimelineComp.Item>
      ))}
    </TimelineComp>
  )
}

const Template: ComponentStory<typeof TimelineComp> = (args) => {
  return (
    <TimelineComp {...args}>
      {data.map((data, index) => (
        <TimelineComp.Item key={index}>
          <TimelineComp.OppositeContent className="m-auto">
            <Text size="sm" className="text-gray-500">
              {data.titleOppositeContent}
              <p>{data.oppositeContent}</p>
            </Text>
          </TimelineComp.OppositeContent>

          <TimelineComp.Separator>
            <TimelineComp.Connector />
            <TimelineComp.Dot
              variant={data.dot?.variant as any}
              color={data.dot?.color as any}
            >
              {data.icon}
            </TimelineComp.Dot>
            <TimelineComp.Connector />
          </TimelineComp.Separator>

          <TimelineComp.Content className="m-auto">
            <Text bold>{data.titleContent}</Text>
            <p>{data.content}</p>
          </TimelineComp.Content>
        </TimelineComp.Item>
      ))}
    </TimelineComp>
  )
}

export const BasicTimeline = BasicTemplate.bind({})
BasicTimeline.args = {
  position: 'left'
}

export const Timeline = Template.bind({})
Timeline.args = {
  position: 'alternate'
}
