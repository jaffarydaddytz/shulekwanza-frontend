import * as React from 'react'
import RoutesContainer from './routes/Routes'
import Loader from './components/Loader';

export default function JoyOrderDashboardTemplate () {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop loading after 3 seconds
    }, 3000);

    // Cleanup timeout on component unmount
    return () => clearTimeout(timer);
  }, []);
  return (

<>

{isLoading ? <Loader /> : <RoutesContainer />}

</>
  )
}

