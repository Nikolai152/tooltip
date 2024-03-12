import styles from "./GetRows.module.scss";

const getRandomAtribute = (): boolean => {
  return Math.random() > 0.5;
};

export const GetRows = (tooltipClassName: string) => {
  const rows = [];

  for (let i = 0; i < 2; i++) {
    const cells = [];
    for (let j = 0; j < 3; j++) {
      const tooltipProps = {
        from: "Рощино",
        to: "Брусничная",
        ...(getRandomAtribute() && { marked: j }),
        ...(getRandomAtribute() && { agreed: j + 3 }),
        ...(getRandomAtribute() && { distributed: i }),
        ...(getRandomAtribute() && { suggestedByKernel: i + 3 }),
      };

      const tooltipPropsLikeString = JSON.stringify(tooltipProps);

      cells.push(
        <td
          className={`${styles.cell} ${tooltipClassName}`}
          key={j}
          data-tooltip="Cell"
          data-tooltip-props={tooltipPropsLikeString}
        >
          <div className={styles.numberOfCell}>
            {tooltipProps.marked !== undefined && (
              <span>{tooltipProps.marked}</span>
            )}
            {tooltipProps.agreed !== undefined && (
              <span>{tooltipProps.agreed}</span>
            )}
            {tooltipProps.distributed !== undefined && (
              <span>{tooltipProps.distributed}</span>
            )}
            {tooltipProps.suggestedByKernel !== undefined && (
              <span>{tooltipProps.suggestedByKernel}</span>
            )}
          </div>
        </td>
      );
    }
    rows.push(<tr key={i}>{cells}</tr>);
  }

  return rows;
};
