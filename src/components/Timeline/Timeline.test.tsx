import { TagIcon } from '@heroicons/react/outline'
import { RenderResult, cleanup, render } from '@testing-library/react'
import Timeline from './'
import { TimeLineDotColor, getDotColor } from './TimelineDot'

const dataTest = [
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
    },
    postion: 'right'
  },
  {
    titleContent: 'APRIL',
    content: 'Quisquam, voluptatum.',
    titleOppositeContent: '14:10 pm',
    postion: 'left'
  }
]

const TimelineComponent = () => (
  <Timeline position="alternate">
    {dataTest.map((data, index) => (
      <Timeline.Item key={index} position={data?.postion as any}>
        <Timeline.OppositeContent className="m-auto">
          <div className="text-gray-500">
            {data.titleOppositeContent}
            <p>{data.oppositeContent}</p>
          </div>
        </Timeline.OppositeContent>

        <Timeline.Separator>
          <Timeline.Connector />
          <Timeline.Dot
            variant={data.dot?.variant as any}
            color={data.dot?.color as any}
          >
            {data.icon}
          </Timeline.Dot>
          <Timeline.Connector />
        </Timeline.Separator>

        <Timeline.Content className="m-auto">
          <span>{data.titleContent}</span>
          <p>{data.content}</p>
        </Timeline.Content>
      </Timeline.Item>
    ))}
  </Timeline>
)

describe('<Timeline />', () => {
  let renderResult: RenderResult

  beforeEach(() => {
    renderResult = render(<TimelineComponent />)
  })

  afterEach(cleanup)

  it('should be render', () => {
    const { container } = renderResult
    expect(container.firstChild).toBeDefined()
  })

  it('the getDotColor should get the correct classes', () => {
    const variants = [
      'primary',
      'warning',
      'info',
      'success',
      'error'
    ] as TimeLineDotColor[]
    const [primary, warning, info, success, error] = variants.map((v) => {
      return getDotColor[v]
    })

    expect(primary).toEqual({
      bg: 'bg-primary',
      border: 'border-primary'
    })

    expect(warning).toEqual({
      bg: 'bg-warning',
      border: 'border-warning'
    })

    expect(info).toEqual({
      bg: 'bg-blue-500',
      border: 'border-blue-500'
    })

    expect(success).toEqual({
      bg: 'bg-green-500 ',
      border: 'border-green-500'
    })

    expect(error).toEqual({
      bg: 'bg-red-500',
      border: 'border-red-500'
    })
  })
})
