import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';

const meta = {
	title: 'Example/Header',
	component: Header,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen'
	}
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderComponent: Story = {
	args: {
		label: 'Header view'
	}
};
