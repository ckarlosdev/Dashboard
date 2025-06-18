import React from "react";
import DRView from "../components/modalContent/DRView";
import CrewView from "../components/modalContent/CrewView";
import EquipmentView from "../components/modalContent/EquipmentView";
import ProblemView from "../components/modalContent/ProblemView";
import ToolView from "../components/modalContent/ToolView";
import DumpsterView from "../components/modalContent/DumpsterView";
import ChecklistView from "../components/modalContent/ChecklistView";
import HazardsView from "../components/modalContent/HazardsView";
import PhotoView from "../components/modalContent/PhotoView";

type Props = {
  data: any;
  date: string;
  jobNumber?: string;
  drId?: number;
};

const ComponentMap: Record<string, React.FC<Props>> = {
  DailyReport: DRView,
  Crew: CrewView,
  Equipment: EquipmentView,
  Problem: ProblemView,
  Photo: PhotoView,
  Tool: ToolView,
  Dumpster: DumpsterView,
  Checklist: ChecklistView,
  Hazard: HazardsView,
};

export default ComponentMap;
