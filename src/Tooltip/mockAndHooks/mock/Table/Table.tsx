import { ReactNode } from "react";
import { Tooltip } from "../../../Tooltip/Tooltip";
import GetCellContent from "../GetCellContent/GetCellContent";
import styles from "./Table.module.scss";

interface ITableProps {
  rows: ReactNode[];
  color?: string;
  tooltipClassName: string; 
}

export const Table = ({ rows, color, tooltipClassName }: ITableProps) => {
  return (
    <div>
      <Tooltip
        toolTipTargetClassName={tooltipClassName}
        getCellContent={GetCellContent}
      />
      <table className={styles.table} style={{ backgroundColor: color }}>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};
