
import {Banner} from '../../components/Banner/Banner'
import {EarthquakeInformation} from '../EarthqakeInformation/EarthquakeInformation'
// import {DataChart} from '../Visualization/DataChart/DataChart'

export const Home = () => {
    return (
        <>
         
       
            <div className='h-screen'>
                <Banner />
          </div>

            <EarthquakeInformation />
            {/* <DataChart/> */}

        </>
    )
}

