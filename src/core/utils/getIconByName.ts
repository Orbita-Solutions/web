import MetricIcon1 from "@svgs/MetricIcon1.svg";
import MetricIcon2 from "@svgs/MetricIcon2.svg";
import MetricIcon3 from "@svgs/MetricIcon3.svg";
import MetricIcon4 from "@svgs/MetricIcon4.svg";

export const getIconSource = (iconName: string) => {
  switch (iconName) {
    case "MetricIcon1":
      return MetricIcon1;
    case "MetricIcon2":
      return MetricIcon2;
    case "MetricIcon3":
      return MetricIcon3;
    case "MetricIcon4":
      return MetricIcon3;
    default:
      return MetricIcon4;
  }
};
