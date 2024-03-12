import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import useDebounce from "../mockAndHooks/hooks/useDebounce";
import styles from "./Tooltip.module.scss";

interface ITooltipProps {
  children: ReactNode;
  target: HTMLElement;
}
const TooltipElement = ({ children, target }: ITooltipProps) => {
  const targetRect = target.getBoundingClientRect();
  const toolTipRef = useRef<HTMLDivElement>(null);
  const [settings, setSettings] = useState({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    const current = toolTipRef.current;
    if (current) {
      setSettings((prev) => ({
        ...prev,
        top: targetRect.top - current.clientHeight,
        left:
          targetRect.left + target.offsetWidth / 2 - current.clientWidth / 2,
      }));
    }
  }, [children, targetRect.top, targetRect.left, target.offsetWidth]);
  return (
    <>
      {children && (
        <div
          ref={toolTipRef}
          className={`${styles.tooltipWindow} tooltipBlock`}
          style={{
            top: settings.top,
            left: settings.left,
          }}
        >
          {children}
        </div>
      )}
    </>
  );
};

interface ITooltipElementProps {
  toolTipTargetClassName: string;
  getCellContent: (element: HTMLElement) => JSX.Element | null;
}

export const Tooltip = ({
  toolTipTargetClassName,
  getCellContent,
}: ITooltipElementProps) => {
  const [tooltipContent, setTooltipContent] = useState<ReactNode>(null);
  const [eventTarget, setEventTarget] = useState<HTMLElement | null>(null);

  const checkTooltip = useCallback(
    (e: MouseEvent, eventType: string) => {
      const target = e.target as HTMLElement;

      const tooltipBody = target.className.includes("tooltipBlock")
        ? target
        : (target.closest(`.tooltipBlock`) as HTMLElement | null);

      const elementWithTooltip = target.className.includes(
        toolTipTargetClassName
      )
        ? target
        : (target.closest(`.${toolTipTargetClassName}`) as HTMLElement | null);

      if (tooltipBody) {
      } else if (elementWithTooltip?.dataset.tooltip) {
        setEventTarget(elementWithTooltip);
      } else if (elementWithTooltip === null) {
        setEventTarget(null);
      }

      if (elementWithTooltip) {
        const tooltipName = elementWithTooltip.dataset.tooltip;

        if (tooltipName) {
          const getTooltipContent = getCellContent(elementWithTooltip);

          if (eventType === "mouseover") {
            setTooltipContent(getTooltipContent);
          }
        }
      }
    },
    [toolTipTargetClassName, getCellContent]
  );

  const debouncedCheck = useDebounce(checkTooltip, 100);

  const handleMouseOver = useCallback(
    (e: MouseEvent): void => {
      debouncedCheck(e, "mouseover");
    },
    [debouncedCheck]
  );

  useEffect(() => {
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [handleMouseOver]);
  return (
    <>
      {tooltipContent && eventTarget && (
        <TooltipElement target={eventTarget}>{tooltipContent}</TooltipElement>
      )}
    </>
  );
};
