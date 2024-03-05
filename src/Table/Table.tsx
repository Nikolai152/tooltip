import React, { ReactNode } from 'react';
import styles from './Table.module.scss';
import { Tooltipelement } from '../Tooltip/Tooltipelement';

interface TableProps {
  rows: ReactNode[];
  color?: string;
  tooltipClassName: string;//если вдруг будет несколько названий тултипов
}

export const Table = ({
  rows,
  color,
  tooltipClassName,
}: TableProps) => {
  return (
    <div>
      <Tooltipelement toolTipTargetClassName={tooltipClassName} /> 
      <table className={styles.table} style={{ backgroundColor: color }}>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};
