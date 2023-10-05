import { Button, Input, Option, Select } from '@material-tailwind/react';
import { useState } from 'react';
import '../../style.css'
import {EarthquakeMonitoringMap} from '../Map/EarthquakeMonitoringMap/EarthquakeMonitoringMap';
import {useStore} from '../../hooks/useStore';


 export const EarthquakeInformation = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [selectedDays, setSelectedDays] = useState('3 Days');



    const setNumOfDays = useStore((state) => state.setNumOfDays);
    const setGlobalStartTime = useStore((state) => state.setStartTime);
    const setGlobalEndTime = useStore((state) => state.setEndTime);


    
    // Function to handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      // You can perform actions with the form data here

      setNumOfDays(selectedDays);
      // pass the query params to be able to perform query
      setGlobalStartTime(startDate);
      setGlobalEndTime(endDate);
      // clear start end input values
      setStartDate('');
      setEndDate('');
    };


    return (
      <section className='max-w-screen-xl mx-auto'>
        <header className="bg-shadow mt-3 p-5 grid grid-cols-3 gap-5">
          <div className='col-span-3 lg:col-span-1'>
            <h1 className='underline decoration-wavy underline-offset-4'>QuakeAlert: Stay Informed, Stay Safe</h1>
          </div>
          <section className='col-span-3 lg:col-span-2'>
            <form onSubmit={handleSubmit} action='' className='grid grid-cols-2 gap-5 w-full'>
              <Input
                name='startDate'
                variant='static'
                label='Start Date'
                type='date'
                color='blue-gray'
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <Input
                name='endDate'
                variant='static'
                label='Ending Date'
                type='date'
                color='blue-gray'
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
              <Select
                name='days'
                variant='static'
                label='Days'
                value={selectedDays}
                color='blue-gray'
                className='text-[#b5bcc5]'
                onChange={(e) => setSelectedDays(e.target.value)}
              >
                <Option value="6 Days">6 Days</Option>
                <Option value="15 Days">15 Days</Option>
              </Select>

              <Button type='submit' size='sm' variant='text' className='button-bg'>
                Search now
              </Button>
            </form>
          </section>
        </header>

        <section className='mt-3'>
          <EarthquakeMonitoringMap />
        </section>
      </section>
    );
  };


