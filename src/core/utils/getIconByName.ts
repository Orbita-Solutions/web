import AppService from "@svgs/appservice.webp";
import cic from "@svgs/cic.svg";
import CICProject from "@svgs/lab.webp";
import ComisionProject from "@svgs/ferreteria.webp";
import ComparenderaProject from "@svgs/traffic.webp";
import DesktopService from "@svgs/desktopservice.webp";
import Ferremaster from "@svgs/ferremaster.png";
import Fraktal from "@svgs/Fraktal.svg";
import Iris from "@svgs/Iris.svg";
import IrisProject from "@svgs/irisproject.webp";
import MetricIcon1 from "@svgs/MetricIcon1.svg";
import MetricIcon2 from "@svgs/MetricIcon2.svg";
import MetricIcon3 from "@svgs/MetricIcon3.svg";
import MetricIcon4 from "@svgs/MetricIcon4.svg";
import Naturnia from "@svgs/naturnia.webp";
import NaturniaProject from "@svgs/naturniaproject.webp";
import SKG from "@svgs/logo-SKG.png";
import SolService from "@svgs/solservices.webp";
import WebService from "@svgs/webservice.webp";
import ZerProject from "@svgs/parking.webp";

const iconMap: { [key: string]: any } = {
  cic,
  CICProject,
  ComisionProject,
  ComparenderaProject,
  DesktopService,
  ferremaster: Ferremaster,
  fraktal: Fraktal,
  iris: Iris,
  IrisProject,
  MetricIcon1,
  MetricIcon2,
  MetricIcon3,
  MetricIcon4,
  naturnia: Naturnia,
  NaturniaProject,
  skg: SKG,AppService,
  SolService,
  WebService,
  ZerProject,
};

export const getIconSource = (iconName: string) =>
  iconMap[iconName] || MetricIcon1;
