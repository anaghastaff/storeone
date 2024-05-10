// import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// const ReactApexChart = dynamic(() => import("react-apexcharts"));
// const ApexChart = (props: Props) => <ReactApexChart {...props} />;
// export default ApexChart;
const ApexChart = props => {
  const [Chart, setChart] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setChart(() => require("react-apexcharts").default);
    }
  }, []);
  return Chart && <Chart {...props} />;
};

export default ApexChart;