import { ReactNode, useEffect, useRef, useState } from 'react';

import styles from './TooltipElement.module.scss';

interface ITooltipProps {
  children: ReactNode;
  target: HTMLElement;
}
export const TooltipElement = ({ children, target }: ITooltipProps) => {
  const targetRect = target.getBoundingClientRect();
  const toolTipRef = useRef<HTMLDivElement>(null);
  const [settings, setSettings] = useState({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    const current = toolTipRef.current;
    const findMiddle = 2;

    if (current) {
      setSettings(prev => ({
        ...prev,
        top: targetRect.top - current.clientHeight,
        left:
          targetRect.left +
          target.offsetWidth / findMiddle -
          current.clientWidth / findMiddle,
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
