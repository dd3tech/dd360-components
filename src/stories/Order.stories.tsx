import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Order from '../components/Layout/Order/Order'

export default {
    title: 'Design System/Layout/Order'
} as ComponentMeta<typeof Order>

export const OrderComponent = () => (
    <div className="flex justify-between bg-gray-200">
        <Order order="last">1</Order>
        <Order order="1">2</Order>
        <Order order="2"> 3</Order>
    </div>
)
