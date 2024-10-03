import cic from "@svgs/cic.svg";
import CICProject from "@svgs/dev.webp";
import ComisionProject from "@svgs/ferreteria.webp";
import ComparenderaProject from "@svgs/traffic.webp";
import Ferremaster from "@svgs/ferremaster.png";
import Fraktal from "@svgs/Fraktal.svg";
import Iris from "@svgs/Iris.svg";
import IrisProject from "@svgs/irisproject.webp";
import MetricIcon1 from "@svgs/MetricIcon1.svg";
import MetricIcon2 from "@svgs/MetricIcon2.svg";
import MetricIcon3 from "@svgs/MetricIcon3.svg";
import MetricIcon4 from "@svgs/MetricIcon4.svg";
import Naturnia from "@svgs/naturnia.webp";
import SKG from "@svgs/logo-SKG.png";
import ZerProject from "@svgs/parking.webp";

const iconMap: { [key: string]: any } = {
  cic,
  CICProject,
  ComisionProject,
  ComparenderaProject,
  ferremaster: Ferremaster,
  fraktal: Fraktal,
  iris: Iris,
  IrisProject,
  MetricIcon1,
  MetricIcon2,
  MetricIcon3,
  MetricIcon4,
  naturnia: Naturnia,
  skg: SKG,
  ZerProject,
};

export const getIconSource = (iconName: string) =>
  iconMap[iconName] || MetricIcon1;
