import { useState ,useEffect } from "react";
const useGymapi = () => {
    // const [data, setData] = useState([]);
    // useEffect(()=>{
    //    Fetachgymapi().then((results)=>{
    //     setData(results)
    //  })
    
    // },[])
    
    //  console.log(data);



    const url = 'https://exercisedb.p.rapidapi.com/exercises?limit=20';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'dc4936c9camsh24f00fe91f1db10p1981a1jsnc581cd0d2b8f',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };





    async function Fetachgymapi() {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            // console.log(result);
            return result;
        } catch (error) {
            console.error(error);
        }
    }

    return { Fetachgymapi }

}
export default useGymapi;