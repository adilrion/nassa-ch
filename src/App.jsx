import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { T } from "./T";



export const App = ()=> {
  return (
    <div>

      {/* <QueryClientProvider client={queryClient}> */}
        <BrowserRouter>

          {/* <StickyNavbar /> */}
          <div className="">
            <Routes>
              <Route path="/" element={<T />} />
              {/* <Route path="/home" element={<Home />} /> */}
          {/*     <Route path="/about" element={<AboutUs />} />
              <Route path="/resources/documentation" element={<Resources />} />
              <Route path="/visualization" element={<Visualization />} />
              <Route path="/visualization/real-time-updates" element={<EarthquakeInformation />} />
              <Route path="/visualization/data-chart" element={<DataChart />} />
              <Route path="/visualization/comparison-chart" element={<ComparisonChart />} />
              <Route path="/visualization/timing-and-alerts" element={<TimingAndAlerts />} /> */}
            </Routes>
          </div>
          {/* <Footer /> */}
        </BrowserRouter>

      {/* </QueryClientProvider> */}


    </div>
  );
}


