import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import { filterData, apiUrl } from './data';
import Spinner from './components/Spinner';
import Cards from './components/Cards';


function App() {

  const [loader, setLoader] = useState(true);
  const [allCourses, setAllCourses] = useState([]);

  async function fetchData() {
    setLoader(true);
    try {
      const result = await fetch(apiUrl);
      const response = await result.json();
      setAllCourses(response.data);
    } catch {
      toast.error("Error while fetching the data from the server")
    }
    setLoader(false);
  }

  useEffect(() => {
    fetchData();
  }, []);


  const [filter, setFilter] = useState('All');

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Filters filterData={filterData} setFilter={setFilter} />
      </div>
      <div>
        {loader ? (<Spinner />) : (<Cards allCourses={allCourses} filter={filter}/>)}
      </div>
    </div>
  );
}

export default App;
