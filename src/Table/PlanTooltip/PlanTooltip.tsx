import { Tooltip } from '../Tooltip/Tooltip';
import PlanTooltipContent from './PlanTooltipContent/PlanTooltipContent';

interface IPlanTooltipProps {
  className: string;
}

export const PlanTooltip = ({ className }: IPlanTooltipProps) => {
  return (
    <Tooltip
      tooltipTargetClassName={className}
      planTooltipContent={PlanTooltipContent}
    />
  );
};
