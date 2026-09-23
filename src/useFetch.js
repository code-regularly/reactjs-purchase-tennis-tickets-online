import { useEffect, useState } from "react";
import firebase from "firebase";

const useFetch = () => {
  const [appData, setappData] = useState( null );
  const [isDataLoding, setIsDataLoading] = useState( false );

  useEffect( () => {
    setIsDataLoading(true);
    
    setTimeout(() => {
      firebase.database().ref('/purchase-tennis-tickets-online/matches').on('value', (data) => {
        setIsDataLoading(false);
        setappData( data.val() );
      });
    }, 1000);
  }, []);

  return [appData, isDataLoding];
}

export default useFetch;
