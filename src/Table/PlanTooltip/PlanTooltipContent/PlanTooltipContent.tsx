import { PrimeIcons } from 'primereact/api';

import styles from './PlanTooltipContent.module.scss';

interface IPlanTooltipContentProps {
  from: string;
  to: string;
  suggestedByKernel?: number;
  marked?: number;
  agreed?: number;
  distributed?: number;
}

interface IRowProps {
  title: string;
  // color: string;
  value: number;
  className: string;
}

// const PlanTooltipContent: React.FC<IPlanTooltipContentProps> = ({ from, to, suggestedByKernel, marked, agreed, distributed }) => {
// const PlanTooltipContent: React.FC<HTMLElement> = element => {
const PlanTooltipContent = (element: HTMLElement) => {
  // if (!element.dataset.tooltipProps) {
  if (!element.dataset.tooltip) {
    return null;
  }
  // const props = JSON.parse(element.dataset.tooltipProps);

  const Row = (props: IRowProps) => (
    // const Row: React.FC<IRowProps> = props => (
    <div className={styles.tooltipRow}>
      <div className={styles.tooltipRowInner}>
        <div
          // className={styles.tooltipRowCircle}
          // style={{ backgroundColor: props.color }}
          className={`${styles.tooltipRowCircle} ${styles[props.className]}`}
        />
        <span className={styles.tooltipRowTitle}>{props.title}</span>
      </div>

      <span>{props.value}</span>
    </div>
  );

  const data: IPlanTooltipContentProps = JSON.parse(element.dataset.tooltip);

  return (
    <div className={styles.tooltipContent}>
      <div className={styles.tooltipHeader}>
        <span>{data.from}</span>
        <i className={PrimeIcons.ARROW_RIGHT}></i>
        <span>{data.to}</span>
      </div>

      {!!data.suggestedByKernel && (
        <Row
          title="Предложено ядром"
          value={data.suggestedByKernel}
          className="suggestedByKernel"
          // color="#444"
        />
      )}
      {!!data.marked && (
        // <Row title="Размечено" value={data.marked} color="#3BA361" />
        <Row title="Размечено" value={data.marked} className="marked" />
      )}
      {!!data.agreed && (
        // <Row title="Согласовано" value={data.agreed} color="#28518F" />
        <Row title="Согласовано" value={data.agreed} className="agreed" />
      )}
      {!!data.distributed && (
        // <Row title="Распределено" value={data.distributed} color="#CED1D6" />
        <Row
          title="Распределено"
          value={data.distributed}
          className="distributed"
        />
      )}
    </div>
  );
};

export default PlanTooltipContent;
