import type { Meta, StoryObj } from '@storybook/react';
import { ReactNode } from 'react';

// import { Table } from "./Table";
import { Rows } from '../mock/Rows/Rows';
import { PlanTooltip } from '../PlanTooltip/PlanTooltip';
// import { Tooltip } from "./Tooltip";
// import PlanTooltipContent from "../PlanTooltipContent/PlanTooltipContent";
import styles from './Tooltip.stories.module.scss';

interface ITableProps {
  rows: ReactNode[];
  color?: string;
  tooltipClassName: string;
}

export const Table = ({ rows, color, tooltipClassName }: ITableProps) => {
  return (
    <div>
      <PlanTooltip className={tooltipClassName} />
      <table className={styles.table} style={{ backgroundColor: color }}>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

const meta = {
  title: 'Components/Tooltip',
  component: Table,
  args: {
    tooltipClassName: 'tooltip',
    rows: Rows('tooltip'),
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const Render: Story['render'] = args => {
  return <Table {...args} />;
};

export const Normal: Story = {
  render: Render,
  args: {
    tooltipClassName: 'tooltip',
    rows: Rows('tooltip'),
  },
};

export const Blue: Story = {
  render: Render,
  args: {
    tooltipClassName: 'tooltip',
    rows: Rows('tooltip'),
    color: 'blue',
  },
};
