import React from 'react'

interface CircleProps extends React.HTMLProps<HTMLDivElement> {
    children?: React.ReactNode
    backgroundColor?: string
    className?: string
    width?: string
    height?: string
    border?: string
    useBackground?: boolean
    disabled?: boolean
}

const Circle: React.FC<CircleProps> = ({
    children,
    backgroundColor = '#EFF6FF',
    className = '',
    width = '3rem',
    height = '3rem',
    border,
    useBackground = true,
    disabled,
    ...props
}: CircleProps) => {
    const chooseClassNameCircle = React.useCallback(() => {
        if (disabled) return `disabled:text-gray-300 disabled:border disabled:border-gray-300 disabled:bg-white`
        return className
    }, [className, disabled])

    return (
        <div
            className={`${chooseClassNameCircle()} items-center flex justify-center rounded-full`}
            style={{ backgroundColor: !useBackground ? '' : backgroundColor, width, height, border }}
            {...props}
        >
            {children}
        </div>
    )
}

export default Circle
