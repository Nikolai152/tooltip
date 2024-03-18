import styles from './Rows.module.scss';

const probabilityAttributeApperanding = 0.5;
const numberOfRows = 2;
const numberOfColumns = 3;
const rundomNumberAgreed = 3;
const rundomNumberSuggestedByKernel = 3;

const getRandAtribute = (): boolean => {
  return Math.random() > probabilityAttributeApperanding;
};

const getCells = (idx: number, tooltipClassName: string) => {
  const cells = [];

  for (let j = 0; j < numberOfColumns; j += 1) {
    const tooltipProps = {
      from: 'Рощино',
      to: 'Брусничная',
      marked: getRandAtribute() ? j : null, // для того чтобы undefined убрать (заменено на null)
      agreed: getRandAtribute() ? j + rundomNumberAgreed : null,
      distributed: getRandAtribute() ? idx : null,
      suggestedByKernel: getRandAtribute()
        ? idx + rundomNumberSuggestedByKernel
        : null,
      // ...(getRandAtribute() && { marked: j }),
      // ...(getRandAtribute() && { agreed: j + rundomNumberAgreed }),
      // ...(getRandAtribute() && { distributed: idx }),
      // ...(getRandAtribute() && {
      //   suggestedByKernel: idx + rundomNumberSuggestedByKernel,
    };

    const tooltipPropsLikeString = JSON.stringify(tooltipProps);

    cells.push(
      <td
        className={`${styles.cell} ${tooltipClassName}`}
        key={j}
        // data-tooltip="Cell"
        data-tooltip={tooltipPropsLikeString}
        // data-tooltip-props={tooltipPropsLikeString}
      >
        <div className={styles.numberOfCell}>
          {/* {tooltipProps.marked !== null && ( */}
          {tooltipProps.marked !== null && <span>{tooltipProps.marked}</span>}
          {/* {tooltipProps.agreed !== null && ( */}
          {tooltipProps.agreed !== null && <span>{tooltipProps.agreed}</span>}
          {/* {tooltipProps.distributed !== null && ( */}
          {tooltipProps.distributed !== null && (
            <span>{tooltipProps.distributed}</span>
          )}
          {/* {tooltipProps.suggestedByKernel !== null && ( */}
          {tooltipProps.suggestedByKernel !== null && (
            <span>{tooltipProps.suggestedByKernel}</span>
          )}
        </div>
      </td>,
    );
  }

  return cells;
};

export const Rows = (tooltipClassName: string) => {
  const rows = [];

  for (let i = 0; i < numberOfRows; i += 1) {
    const cells = getCells(i, tooltipClassName);

    rows.push(<tr key={i}>{cells}</tr>);
  }

  return rows;
};
