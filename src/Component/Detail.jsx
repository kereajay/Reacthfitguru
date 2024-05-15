
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const Details = () => {
    const [diplaysingledata, setDisplaysingledata] = useState([])
    const { id } = useParams()

    useEffect(() => {
        awaydiplay().then((results) => {
           
            setDisplaysingledata(results);

        })

    }, [])

    const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'dc4936c9camsh24f00fe91f1db10p1981a1jsnc581cd0d2b8f',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };





    async function awaydiplay() {
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            // console.log(result);
            return result;
        } catch (error) {
            console.error(error);
        }
    }
    return (

        <>
            <br />
            <h1 className='text-4xl font-semibold text-center mt-5'>Exercise Detail</h1>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-[80%] m-auto mt-10 p-8'>
                <div>
                    <img src={diplaysingledata.gifUrl} alt="" />

                </div>
                {/* <hr /> */}
                <div>
                    <h1 className='text-3xl font-bold'>{diplaysingledata.name}</h1>
                    <br />
                    <p className='text-xl'>{diplaysingledata.instructions}</p>
                   
                    <br />

                    <div className='hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] p-5'>
                    <p className='text-lg font-bold '>Bodypart:- <span className='text-slate-500 text-sm'>{diplaysingledata.bodyPart}</span></p>
                    <br />
                    <p className='text-lg font-bold '>Equipment:- <span className='text-slate-500 text-sm'>{diplaysingledata.equipment}</span></p>
                    <br />
                    <p className='text-lg font-bold '>Target Muscle:- <span className='text-slate-500 text-sm'>{diplaysingledata.target}</span></p>
                    <br />
                    <p className='text-lg font-bold '>Secondary Muscle:- <span className='text-slate-500 text-sm'>{diplaysingledata.
                        secondaryMuscles
                    }</span></p>
                    </div>

                </div>


            </div>


        </>
    )
}
export default Details