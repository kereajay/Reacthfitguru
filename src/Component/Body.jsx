import useGymapi from './Content'
import { useState, useEffect } from 'react'

const Body = () => {
    const { Fetachgymapi } = useGymapi()
    const [data2, setData2] = useState([]);
    const [filteredexercise, setFilteredexercise] = useState(data2);
    const [searchval, setSearchval] = useState("");
   
    // setFilteredexercise(data);


    const dumbledat = [
        { id: 1, name: "Back" },
        { id: 2, name: "Cardio" },
        { id: 3, name: "Chest" },
        { id: 4, name: "Lower Arms" },
        { id: 5, name: "Lower Legs" },
        { id: 6, name: "Neck" },
        { id: 7, name: "Shoulders" },
        { id: 8, name: "Upper Arms" },
        { id: 9, name: "Upper Legs" },
        { id: 10, name: "Waist" },
    ]


    useEffect(() => {
        Fetachgymapi().then((results) => {
            setData2(results)
            setFilteredexercise(results);
        })

    }, [])
    //  console.log(data2);

    const filterexercise = (idf, titlename) => {
        const filteredcard = data2.filter((item) => {
            return item.bodyPart.toLowerCase() === titlename.toLowerCase()

        })
        setFilteredexercise(filteredcard);

        // console.log(idf,titlename);
    }
    const searchfilter=()=>{
       const searchfiltered=data2.filter((it)=>{
        return it.bodyPart.toLowerCase().includes(searchval.toLowerCase())
       })
       setFilteredexercise(searchfiltered);
    //    setSearchval("");

    }




    return (
        <>

            <div className='bg-[url(https://www.fitnessfirst.co.uk/media/vmkjyzet/fitnessfirst-hammersmith-apr2023-327h.jpg?width=1920&height=1080&format=webp&quality=80&v=1d97cef33ee6630)] w-full h-full bg-no-repeat bg-cover text-center  p-44'>
                <h1 className='text-4xl font-bold text-white uppercase'>FASTER, STRONGER <br />
                    <span className='text-orange-600'>FIGHT</span> TO THE END</h1>
                <br />
                <button className='bg-orange-600 text-white p-4 text-xl rounded-3xl' >Get All Exercise</button>
            </div>
            <br />
            <br />
            <h1 className='text-2xl font-bold text-center'>Awesome Exercises You Should Know</h1>
            <br />
            <br />
            <div className='flex justify-center'>

                <input type="search" placeholder="Search Exercise" className='w-3/6 h-12 border-2 border-black'  onChange={(e)=>setSearchval(e.target.value)}/>
                <button className='bg-orange-600 text-white p-2  text-xl ' onClick={searchfilter}>SUBMIT</button>
            </div>
            <br />
            <br />

            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 w-[80%] m-auto items-center text-center  p-8'>

                {
                    dumbledat.map((item) => {
                        return (
                            <>
                                <div key={item.id} className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-8 mt-4 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]' onClick={() => filterexercise(item.id, item.name)}>
                                    <img src="https://www.svgrepo.com/show/196327/dumbbell-gym.svg" alt="" width={30} className='m-auto' />
                                    <br />
                                    <h1 className='text-xl font-bold'>{item.name}</h1>

                                </div>

                            </>
                        )

                    })

                }

            </div>
            <br />
            <br />

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 w-[80%] m-auto'>
                {
                    filteredexercise.map((item) => {
                        return (
                            <>
                                <div className='text-center shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] p-2 rounded-xl'>
                                    <img src={item.gifUrl} alt="" />
                                    <div className=' gap-2'>
                                        <span className='bg-orange-300 mr-2 p-1 rounded-xl'>{item.bodyPart}</span>
                                        <span className='bg-green-300 mr-2 p-1 rounded-xl'>{item.target}</span>
                                        <span className='bg-blue-300 mr-2 p-1 rounded-xl'>{item.equipment}</span>
                                    </div>
                                    <h1 className='text-xl font-bold mt-2'>{item.name}</h1>
                                </div>




                            </>
                        )

                    })
                }




            </div>
            <br />
            <br />

        </>
    )
}
export default Body;