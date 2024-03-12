import styles from "./GetCellContent.module.scss";

import { PrimeIcons } from "primereact/api";

interface IRowProps {
  title: string;
  color: string;
  value: number;
}

const GetCellContent = (element: HTMLElement) => {
  if (!element.dataset.tooltipProps) {
    return null;
  }
  const props = JSON.parse(element.dataset.tooltipProps);

  const Row = (props: IRowProps) => (
    <div className={styles.tooltipRow}>
      <div className={styles.tooltipRowInner}>
        <div
          className={styles.tooltipRowCircle}
          style={{ backgroundColor: props.color }}
        />
        <p className={styles.tooltipRowTitle}>{props.title}</p>
      </div>

      <p>{props.value}</p>
    </div>
  );

  return (
    <div className={styles.tooltipContent}>
      <div className={styles.tooltipHeader}>
        <p>{props.from}</p>
        <i className={PrimeIcons.ARROW_RIGHT}></i>
        <p>{props.to}</p>
      </div>

      {!!props.suggestedByKernel && (
        <Row
          title="Предложено ядром"
          value={props.suggestedByKernel}
          color="#444"
        />
      )}
      {!!props.marked && (
        <Row title="Размечено" value={props.marked} color="#3BA361" />
      )}
      {!!props.agreed && (
        <Row title="Согласовано" value={props.agreed} color="#28518F" />
      )}
      {!!props.distributed && (
        <Row title="Распределено" value={props.distributed} color="#CED1D6" />
      )}
    </div>
  );
};

export default GetCellContent


