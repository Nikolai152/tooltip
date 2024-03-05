import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "../Table/Table";
import { getRows } from "../Table/utils";

const meta = {
  title: "Components/Tooltip",
  component: Table,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const Render: Story["render"] = (args) => {
  return <Table {...args} />;
};

export const Red: Story = {
  render: Render,
  args: {
    tooltipClassName: "tooltip",
    rows: getRows("tooltip"),
    color: "red",
  },
};

export const Blue: Story = {
  render: Render,
  args: {
    tooltipClassName: "tooltip",
    rows: getRows("tooltip"),
    color: "blue",
  },
};
