export type Job = {
  jobsId: number;
  number: string;
  type: string;
  name: string;
  address: string;
  contractor: string;
  contact: string;
  status: string;
};

export type DailyReport = {
  dailyReportId: number;
  number: string;
  address: string;
  name: string;
  workingFor: string;
  date: string;
  foreman: string;
  crew: string;
  description: string;
  manTotal: string;
  manHoursTotal: string;
  manOther: string;
  equipmentTotal: string;
  equipHoursTotal: string;
  equipmentOther: string;
  issues: string;
  createdBy: string;
  createdDate: string;
  updatedBy: string;
  updatedDate: string;
  status: string;
};

export type DrEmployee = {
  drEmployeesId: number;
  dailyReportId: number;
  employeesId: string;
  name: string;
  title: string;
  inHour: string;
  outHour: string;
  lunch: string;
  ppe: string;
  comment: string;
  status: string;
};

export type DrEquipment = {
  drEquipmentsId: number;
  dailyReportId: number;
  equipmentsId: number;
  employeesId: string;
  operator: string;
  type: string;
  number: string;
  name: string;
  serialNumber: string;
  initialHour: string;
  newHour: string;
  status: string;
};

export type Dumpster = {
  drDumpstersId: number;
  dailyReportId: number;
  concret40: number;
  concret35: number;
  concret30: number;
  concret20: number;
  concret12: number;
  concretQuad: number;
  concretSemi: number;
  concretGondola: number;
  metal40: number;
  metal35: number;
  metal30: number;
  metal20: number;
  metal12: number;
  metalQuad: number;
  metalSemi: number;
  metalGondola: number;
  cd40: number;
  cd35: number;
  cd30: number;
  cd20: number;
  cd12: number;
  cdQuad: number;
  cdSemi: number;
  cdGondola: number;
  status: string;
};

export type Photos = {
  photosId: number;
  dailyReportId: number;
  drDate: string;
  pathId: string;
  folderId: string;
  name: string;
  type: string;
  status: string;
};

export type Problem = {
  problemsId: number;
  drEquipment: DrEquipment;
  type: string;
  priority: string;
  description: string;
  status: string;
};

export type Tool = {
  drToolId: number;
  dailyReportId: number;
  qty: number;
  name: string;
  other: string;
  type: string;
  comments: string;
  status: string;
};

export type Checklist = {
  googleChecklistsId: number;
  equipmentsGoogleChecklistsId: number;
  equipmentNumber: string;
  equipmentName: string;
  operator: string;
  odometer: number;
  oil: string;
  hydraulic: string;
  filter: string;
  radiator: string;
  track: string;
  attachment: string;
  leaking: string;
  diesel: string;
  clean: string;
  comment: string;
  status: string;
  otherType: string;
};

export type Option = {
  pretasksOptionsId: number;
  pretasksCheckboxOptionsId: number;
  other: string;
  optionName: string;
  optionType: string;
};

export type Activity = {
  activitiesId: number;
  activity: string;
  hazards: string;
  controls: string;
};

export type Hazard = {
  preTasksId: number;
  jobsId: number;
  date: string;
  supervisor: string;
  comment: string;
  activities: Activity[];
  pretasksOptionDtos: Option[];
};

export type DRSummary = {
  type: string;
  value: string;
  count: number;
};

export type employeeSummary = {
  drEmployeesId: number;
  outHour: string;
  inHour: string;
  timeDifference: string;
  totalHoursDecimal: number;
  lunch: string;
};
