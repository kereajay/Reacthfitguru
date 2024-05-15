
import useGymapi from "./Content";
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Exercise=()=>{
    const navigate=useNavigate();
    const[alldata,setAlldata]=useState([]);
    const {Fetachgymapi}=useGymapi();
    useEffect(() => {
        Fetachgymapi().then((results) => {
            setAlldata(results)
        })

    }, [])


    const handlepageclick=(id)=>{

        navigate(`/Details/${id}`)

        
    }
    console.log(alldata)
    return(
        <>
        <br />
        <br />
        <br />
         <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 w-[80%] m-auto'>
                {
                    alldata.map((item) => {
                        return (
                            <>
                                <div className='text-center shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] p-2 rounded-xl' key={item.id} onClick={()=>handlepageclick(item.id)}>
                                    <img src={item.gifUrl} alt=""  />
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
export default Exercise;