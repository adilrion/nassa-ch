import {EarthquakeData} from "./EarthquakeData"
/* import {EarthquakePrediction} from "./EarthquakePrediction"
import {SolarStormData} from "./SolarStormData"
import {SolarStormPrediction} from "./SolarStormPrediction" */

export const DataChart = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
    
      <header className="pt-10 py-6">
        <h1 className="underline decoration-wavy underline-offset-4">Data Chart</h1>
      </header>
      
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <EarthquakeData />
       {/*    <EarthquakePrediction />
          <SolarStormData />
          <SolarStormPrediction/> */}
        </div>
      </section>
    
    
    </div>
  )
}
