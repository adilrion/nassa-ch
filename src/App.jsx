import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { StickyNavbar } from "./components/Navbar/Navbar";

import { QueryClientProvider } from "@tanstack/react-query";
import {EarthquakeInformation} from "./Pages/EarthqakeInformation/EarthquakeInformation";
import { Home } from "./Pages/Home/Home";
import { queryClient } from "./queryClient";
import { AboutUs } from "./Pages/AboutUs/AboutUs";
import { Resources } from "./Pages/Resources/Resources";
import { Footer } from "./components/Footer/Footer";
import { Visualization } from "./Pages/Visualization/Visualization";
import { DataChart } from "./Pages/Visualization/DataChart/DataChart";
import { ComparisonChart } from "./Pages/Visualization/ComparisonChart";
import { TimingAndAlerts } from "./Pages/TimingAndAlerts/TimingAndAlerts";



export const App = ()=> {
  return (
    <div>

      <QueryClientProvider client={queryClient}>
        <BrowserRouter>

          <StickyNavbar />
          <div className="">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/resources/documentation" element={<Resources />} />
              <Route path="/visualization" element={<Visualization />} />
              <Route path="/visualization/real-time-updates" element={<EarthquakeInformation />} />
              <Route path="/visualization/data-chart" element={<DataChart />} />
              <Route path="/visualization/comparison-chart" element={<ComparisonChart />} />
              <Route path="/visualization/timing-and-alerts" element={<TimingAndAlerts />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>

      </QueryClientProvider>


    </div>
  );
}


