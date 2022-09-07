import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Input as InputComponent } from '../components/Form/Input'

export default {
    title: 'Form/Input',
    component: InputComponent
} as ComponentMeta<typeof InputComponent>

const Template: ComponentStory<typeof InputComponent> = (args) => <InputComponent {...args} />

export const Input = Template.bind({})
Input.args = {
    label: 'Ejemplo'
}
