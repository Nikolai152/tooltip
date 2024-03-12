import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '../mockAndHooks/mock/Table/Table';
import { GetRows } from '../mockAndHooks/mock/GetRows/GetRows';

const meta = {
  title: 'Components/Tooltip',
  component: Table,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const Render: Story['render'] = (args) => {
  return <Table {...args} />;
};

export const Normal: Story = {
  render: Render,
  args: {
    tooltipClassName: 'tooltip',
    rows: GetRows('tooltip'),
  },
};

export const Blue: Story = {
  render: Render,
  args: {
    tooltipClassName: "tooltip",
    rows: GetRows("tooltip"),
    color: "blue",
  },
};
