import type { Meta, StoryObj } from '@storybook/react';

import { MenuItem } from './MenuItem';

const meta = {
	title: 'Menu/MenuItem',
	component: MenuItem,
	tags: ['autodocs'],
	args: {
		imagePath: '/assets/pizza/pizza-01.jpeg',
		weight: 555,
		title: 'Manhattan pizza',
		ingredients:
			'Double portion of mushrooms, mozzarella, pepperoni, Alfredo sauce',
		price: 215
	}
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const values: Story = {
	args: {
		imagePath: '/assets/pizza/pizza-01.jpeg',
		weight: 555,
		title: 'Manhattan pizza',
		ingredients:
			'Double portion of mushrooms, mozzarella, pepperoni, Alfredo sauce',
		price: 215
	}
};
