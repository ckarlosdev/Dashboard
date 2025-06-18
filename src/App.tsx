import Dashboard from "./components/Dashboard";
import useMain from "./hooks/useMain2";

function App() {
  const { setJobSelected, jobSelected, jobs } = useMain();

  // console.log(dailyReportsData);

  return (
    <Dashboard
      jobSelected={jobSelected}
      setJobSelected={setJobSelected}
      jobsData={jobs}
    />
  );
}

export default App;
