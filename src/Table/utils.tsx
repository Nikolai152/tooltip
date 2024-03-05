import styles from "./Table.module.scss";

const getRandomAtribute = () => {
  return Math.random() > 0.5;
};

export const getRows = (tooltipClassName: string) => {
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
            {tooltipProps.marked !== undefined && <p>{tooltipProps.marked}</p>}
            {tooltipProps.agreed !== undefined && <p>{tooltipProps.agreed}</p>}
            {tooltipProps.distributed !== undefined && (
              <p>{tooltipProps.distributed}</p>
            )}
            {tooltipProps.suggestedByKernel !== undefined && (
              <p>{tooltipProps.suggestedByKernel}</p>
            )}
          </div>
        </td>
      );
    }
    rows.push(<tr key={i}>{cells}</tr>);
  }

  return rows;
};
