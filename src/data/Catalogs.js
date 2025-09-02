import { Download, Smartphone, Monitor, FileText,ChartArea,Caravan,TableOfContents,BatteryCharging,Signal,Dam  } from "lucide-react";
const catalogs = [
  {
    id: 1,
    name: "CONNECTION DIAGRAM",
    link: "/assets/catalogs data/ConnectionDiagram.pdf",
    icon: ChartArea,
    color: "blue",
  },
  {
    id: 2,
    name: "MOBILE AUTO USER MANUAL",
    link: "/assets/catalogs data/MobileAutoUserManual.pdf",
    icon: Caravan ,
    color: "blue",
  },
  {
    id: 3,
    name: "MOBILE AUTO USER MANUAL HINDI",
    icon: TableOfContents ,
    color: "blue",
  },
  {
    id: 4,
    name: "MOBILE AUTO USER MANUAL WITH BATTERY",
    icon: BatteryCharging,
    color: "blue",
  },
  {
    id: 5,
    name: "MOBILE AUTO USER MANUAL BATTERY IN HINDI",
    icon: TableOfContents ,
    color: "blue",
  },
  {
    id: 6,
    name: "MOBILE AUTO 4G USER MANUAL",
    icon: Signal,
    color: "blue",
  },
  {
    id: 7,
    name: "WATER LEVEL CONTROLLER INSTALLATION",
    icon: Dam,
    color: "blue",
  },
];
export default catalogs;
