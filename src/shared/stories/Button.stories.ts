import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../ui';

const meta = {
  title: 'Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'regular',
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'medium',
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

