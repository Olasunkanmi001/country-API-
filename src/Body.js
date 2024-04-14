import React from 'react'
import { useState } from 'react'
import { data } from './Data'
const Body = () => {

  const [countries, setCountries] = useState(data)

  const [input, setInput] = useState("")

  

  

  const inerInput = (event) => {

    
   

    let search = data.filter((me)=>{

      return(
        me.name.toLowerCase().includes(event.target.value.toLowerCase())
          
      )
      
    })
    
    setCountries(search)
    

    // let sch = data.filter((me)=>{

    //   return(
    //     me.region.includes(event.target.value)
    //   )
    // })
    // setCountries(sch)


   
    
// console.log(countries.includes(event.target.value))
// if ( event.target.value.includes(data.region) ){

//   console.log("me")

//   // let searching = data.filter((search)=>{

//   //   return search.region === 
//   // })



// }



}

 
//       const [countries, setCountries] = useState(null)
// useEffect(() => {


//    const you = () => {

//        setCountries(console.log("hello"))
//    }

    //HANDLE CHANGE

    // const handleChange = (event) =>{
    //   console.log(event)
    // }

    // let name = "lanre"

    // console.log(name.includes("yz"))

    const handleChange = (event) => {
      // console.log(event.target.value)
if(event.target.value === "africa"){
  
 
    let afri = data.filter((me)=>{
      return(me.region === "Africa")
  
  })

  setCountries(afri)
  
  
}
if (event.target.value === "asia"){
  let asias = data.filter((me)=>{
    return(me.region === "Asia")

  })

  setCountries(asias)
}

if (event.target.value === "europe"){
  let eur = data.filter((me)=>{
    return(me.region === "Europe")

  })

  setCountries(eur)
}


if (event.target.value === "oceania"){
  let oce = data.filter((me)=>{
    return(me.region === "Oceania")

  })

  setCountries(oce)
}

if (event.target.value === "americas"){
  let amer = data.filter((me)=>{
    return(me.region === "Americas")

  })

  setCountries(amer)
}

if (event.target.value === "polar"){
  let pol = data.filter((me)=>{
    return(me.region === "Polar")

  })

  setCountries(pol)
}

if (event.target.value === "antarctic ocean"){
  let ant = data.filter((me)=>{
    return(me.region === "Antarctic Ocean")

  })

  setCountries(ant)
}
     
    };



    
  
   
// }, [])


// me.map((you)=>{
//     console.log(you)

// })


     
       
      

    
      
  return (
    <div className='bg-[#E5E7EB] dark:bg-black dark:text-white pt-5 grid justify-center  items-center md:grid-cols-2 lg:grid-cols-3'>

    <input onChange={(event)=>{inerInput(event)}} type="text" placeholder='Search for a country....' className=' dark:bg-black dark:text-white dark:border-2 dark:border-white-100 w-[300px] h-[40px] mb-10 shadow-xl md:ml-10 lg:h-[100px] pl-10 lg:w-[500px] rounded-lg lg:text-3xl'></input>

<select onChange={(event) =>{handleChange(event)}} className='h-10 w-40 rounded-md mb-10 md:ml-10 lg:w-[300px] dark:bg-black dark:text-white dark:border-2 dark:border-white-100 lg:h-[100px] lg:text-4xl lg:mb-24'>
            <option > Filter by Region </option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="africa">Africa</option>
            <option value="oceania"> Oceania</option>
            <option value = "americas">Americas</option>
            <option value="polar">Polar</option>
            <option value="antarctic ocean"> Antarctic Ocean</option>

          </select> <br className='md:hidden lg:flex'/>
        

        {countries.map((use)=>{
       return(
        <div className=' bg-white dark:bg-black dark:text-white w-[300px] h-[400px] rounded-lg mb-10 shadow-lg md:ml-12 lg:w-auto lg:h-[1000px] lg:m-10'>
            <img src= {use.flags.svg} className='mb-8 h-[200px] w-[350px]  lg:w-[1000px] lg:h-[580px] lg:mb-28' />
            <h1 className='ml-8 text-2xl mb-3 font-extrabold lg:text-5xl'> {use.name} </h1>
            <p className='ml-8 font-bold lg:text-3xl'>Population:{use.population}</p>
            <p className='ml-8 font-bold lg:text-3xl'>Region:{use.region}</p>
            <p className='ml-8 font-bold lg:text-3xl'>Capital:{use.capital}</p>


           
        
        
        
          

      
        
         </div>
       )

        })}
       {/* {our.map((you)=>{
                return(
                    <div className=' bg-white dark:bg-black dark:text-white w-[300px] h-[400px] rounded-lg mb-10 shadow-lg md:ml-12 lg:w-auto lg:h-[1000px] lg:m-10'>
                    <img src= {you.flags.svg} className='mb-8 h-[200px] w-[350px]  lg:w-[1000px] lg:h-[580px] lg:mb-28' />
                    <h1 className='ml-8 text-2xl mb-3 font-extrabold lg:text-5xl'> {you.name} </h1>
                    <p className='ml-8 font-bold lg:text-3xl'>Population:{you.population}</p>
                    <p className='ml-8 font-bold lg:text-3xl'>Region:{you.region}</p>
                    <p className='ml-8 font-bold lg:text-3xl'>Capital:{you.capital}</p>
        
        
                   
                
                
                
                  
        
              
                
                 </div>
                )
            })} */}
      



    </div>
  )
}

export default Body