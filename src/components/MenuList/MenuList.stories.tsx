import type { Meta, StoryObj } from '@storybook/react';

import { MenuList } from './MenuList';

const meta = {
	title: 'Menu/MenuList',
	component: MenuList,
	tags: ['autodocs'],
	args: {
		imagePath: '/assets/pizza/pizza-01.jpeg',
		weight: 555,
		title: 'Manhattan pizza',
		ingredients:
			'Double portion of mushrooms, mozzarella, pepperoni, Alfredo sauce',
		price: 215
	}
} satisfies Meta<typeof MenuList>;

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
