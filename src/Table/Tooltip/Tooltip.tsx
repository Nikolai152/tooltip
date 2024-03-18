import { ReactNode, useCallback, useEffect, useState } from 'react';

import useEventDebounce from '../hooks/useEventDebounce';
import { TooltipElement } from './TooltipElement';

interface ITooltipElementProps {
  tooltipTargetClassName: string;
  planTooltipContent: (element: HTMLElement) => JSX.Element | null;
}

export const Tooltip = ({
  tooltipTargetClassName,
  planTooltipContent,
}: ITooltipElementProps) => {
  const [tooltipContent, setTooltipContent] = useState<ReactNode>(null);
  const [eventTarget, setEventTarget] = useState<HTMLElement | null>(null);

  function findTooltipElement(
    target: HTMLElement,
    className: string,
  ): HTMLElement | null {
    // добавлена общая для tooltipBody и elementWithTooltip функция
    return target.className.includes(className)
      ? target
      : (target.closest(`.${className}`) as HTMLElement | null);
  }

  const checkTooltip = useCallback(
    (e: MouseEvent, eventType: string) => {
      const target = e.target as HTMLElement;

      // const tooltipBody = target.className.includes("tooltipBlock")
      //   ? target
      //   : (target.closest(`.tooltipBlock`) as HTMLElement | null);

      // const elementWithTooltip = target.className.includes(
      //   tooltipTargetClassName
      // )
      //   ? target
      //   : (target.closest(`.${tooltipTargetClassName}`) as HTMLElement | null);

      const tooltipBody = findTooltipElement(target, 'tooltipBlock'); // доб
      const elementWithTooltip = findTooltipElement(
        target,
        tooltipTargetClassName,
      ); // доб

      // if (tooltipBody) {
      // } else if (elementWithTooltip?.dataset.tooltip) {
      //   setEventTarget(elementWithTooltip);
      // } else if (elementWithTooltip === null) {
      //   setEventTarget(null);
      // }
      if (tooltipBody) {
        return;
      }
      if (elementWithTooltip === null) {
        setEventTarget(null);
        return;
      }
      if (elementWithTooltip?.dataset.tooltip) {
        setEventTarget(elementWithTooltip);
      }

      if (elementWithTooltip) {
        const tooltipName = elementWithTooltip.dataset.tooltip;

        if (tooltipName) {
          const getTooltipContent = planTooltipContent(elementWithTooltip);

          if (eventType === 'mouseover') {
            setTooltipContent(getTooltipContent);
          }
        }
      }
    },
    [tooltipTargetClassName, planTooltipContent],
  );

  //
  // const tableTds = document.getElementsByClassName("tooltip");
  //
  const delay = 100;

  const debouncedCheck = useEventDebounce(checkTooltip, delay);

  const handleMouseOver = useCallback(
    (e: MouseEvent): void => {
      debouncedCheck(e, 'mouseover');
    },
    [debouncedCheck],
  );

  useEffect(() => {
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [handleMouseOver]);
  return (
    // <>
    //   {tooltipContent && tableTds?.[2] && (
    //     <TooltipElement target={tableTds?.[2]}>{tooltipContent}</TooltipElement>
    //   )}
    // </>
    <>
      {tooltipContent && eventTarget && (
        <TooltipElement target={eventTarget}>{tooltipContent}</TooltipElement>
      )}
    </>
  );
};
