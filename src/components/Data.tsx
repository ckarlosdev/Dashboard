import { Job } from "../types";
import Card from "./Card";

type DailyReportSummary = {
  date: string; 
};
type Props = {
  summaries: DailyReportSummary[];
  jobSelected: Job | undefined;
};

function Data({ summaries, jobSelected }: Props) {
  return (
    <div
      className="d-flex gap-3" // Quitamos 'flex-wrap'
      style={{
        overflowX: "auto", // Habilita el scroll horizontal si el contenido se desborda
        paddingBottom: "10px", // Opcional: añade un poco de espacio para que la barra de desplazamiento no se pegue al contenido
      }}
    >
      {summaries
        .slice()
        .reverse()
        .map((data) => (
          <Card
            jobSelected={jobSelected}
            key={data.date}
            dateValue={data.date}
          >
            {data.date}
          </Card>
        ))}
    </div>
  );
}

export default Data;
