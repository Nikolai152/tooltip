import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./Tooltipelement.module.scss";
import "./tooltip.scss";
import { PrimeIcons } from "primereact/api";

//  Убран useEventListener
//
// type EventType = keyof DocumentEventMap;

// const useEventListener = (
//   events: EventType[],
//   callback: (event: MouseEvent, eventType: EventType) => void
// ) => {
//   const prevType = useRef<string>("");

//   useEffect(() => {
//     const handleEvent = (type: EventType) => (event: MouseEvent) => {
//       const target = event.target as HTMLElement;

//       if (target.classList?.contains("tooltip") && prevType.current !== type) {
//         prevType.current = type;
//         callback(event, type);
//       }
//     };

//     for (const eventType of events) {
//       document.addEventListener(eventType, (e) =>
//         handleEvent(eventType)(e as MouseEvent)
//       );
//     }

//     return () => {
//       for (const eventType of events) {
//         document.removeEventListener(eventType, (e) =>
//           handleEvent(eventType)(e as MouseEvent)
//         );
//       }
//     };
//   }, [callback, events]);
// };

const tooltipContents: Record<
  string,
  ReactNode | ((element: HTMLElement) => ReactNode)
> = {
  Cell: (element: HTMLElement) => {
    if (!element.dataset.tooltipProps) {
      return null;
    }

    const props = JSON.parse(element.dataset.tooltipProps);

    interface RowProps {
      title: string;
      color: string;
      value: number;
    }

    const Row = (props: RowProps) => (
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

        {props.suggestedByKernel !== undefined && (
          <Row
            title="Предложено ядром"
            value={props.suggestedByKernel}
            color="#444"
          />
        )}
        {props.marked !== undefined && (
          <Row title="Размечено" value={props.marked} color="#3BA361" />
        )}
        {props.agreed !== undefined && (
          <Row title="Согласовано" value={props.agreed} color="#28518F" />
        )}
        {props.distributed !== undefined && (
          <Row title="Распределено" value={props.distributed} color="#CED1D6" />
        )}
      </div>
    );
  },
};

interface ITooltipProps {
  children: ReactNode;
  target: HTMLElement;
}
const NewTooltip = ({ children, target }: ITooltipProps) => {
  const targetRect = target.getBoundingClientRect();
  const [settings, setSettings] = useState({
    width: target.offsetWidth,
    // top: targetRect.top - 10,
    // left: targetRect.left + target.offsetWidth / 2,
    top: 0,
    left: 0,
  });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = ref.current;
    if (current) {
      setSettings((prev) => ({
        ...prev,
        top: targetRect.top - 6 - current.clientHeight,
        left:
          targetRect.left + target.offsetWidth / 2 - current.clientWidth / 2,
      }));
    }
  }, [children, targetRect.top, targetRect.left, target.offsetWidth]);
  return (
    <>
      {children && (
        <div
          ref={ref}
          className={styles.tooltipWindow}
          style={{
            position: "fixed",
            top: parseInt(`${settings.top}px`),
            left: parseInt(`${settings.left}px`),
          }}
        >
          {children}
        </div>
      )}
    </>
  );
};

interface ITooltipelementProps {
  toolTipTargetClassName: string;
}

export const Tooltipelement = ({
  toolTipTargetClassName,
}: ITooltipelementProps) => {
  const [tooltipContent, setTooltipContent] = useState<ReactNode>(null);
  const [eventTarget, setEventTarget] = useState<HTMLElement | null>(null);

  // useEventListener(["mouseover", "mouseout"], checkTooltip);
  //

  const checkTooltip = useCallback(
    (e: MouseEvent, eventType: string) => {
      const target = e.target as HTMLElement;
      setEventTarget(target);

      const elementWithTooltip = target.className.includes(
        toolTipTargetClassName
      )
        ? target
        : (target.closest(`.${toolTipTargetClassName}`) as HTMLElement | null);

      if (elementWithTooltip) {
        const tooltipName = elementWithTooltip.dataset.tooltip;

        if (tooltipName) {
          const getTooltipContent = tooltipContents[tooltipName];

          const tooltipContent =
            typeof getTooltipContent === "function"
              ? getTooltipContent(elementWithTooltip)
              : getTooltipContent;

          eventType === "mouseover"
            ? setTooltipContent(tooltipContent)
            : setTooltipContent(null);
        }
      }
    },
    [toolTipTargetClassName]
  );

  useEffect(() => {
    //
    const handleMouseOver = (e: MouseEvent): void => {
      checkTooltip(e, "mouseover");
    };
    const handleMouseOut = (e: MouseEvent): void => {
      checkTooltip(e, "mouseout");
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [checkTooltip]);
  //
  return (
    <>
      {tooltipContent && eventTarget && (
        <NewTooltip target={eventTarget}>{tooltipContent}</NewTooltip>
      )}
    </>
  );
};
