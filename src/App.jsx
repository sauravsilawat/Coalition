import { useEffect, useState } from 'react'
import './App.css'
import { fetchData } from './apiService'
import NavBar from './components/NavBar'
import PatientDetail from './components/PatientDetail'
import PatientList from './components/PatientList'
import DiaList from './components/DiaList'
import DiaHistory from './components/DiaHistory'

function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  useEffect((() => {
    console.log(data)
  }), [data])

  if (loading) {
    return <div className='flex justify-center items-center text-5xl font-manrope font-400 pt-60'>Loading...</div>;
  }

  if (error) {
    return <div className='flex justify-center items-center text-5xl font-manrope font-400 pt-60'>Error: {error}</div>;
  }

  return (
    <div className='bg-[#F6F7F8] h-full'>
      <NavBar />
      <div className='flex gap-8 px-6 pb-8'>
        <PatientList data={data} />
        <main className='w-[50%] flex flex-col gap-8'>
          <DiaHistory data={data[3].diagnosis_history} />
          <DiaList data={data[3]} />
        </main>
        <PatientDetail data={data} />      
      </div>
    </div>
  )
}

export default App
