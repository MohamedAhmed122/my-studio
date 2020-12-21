import React from 'react'
import Hero from '../../components/hero/Hero'
import HomeProject from '../../components/HomeProject/HomeProject'
// import Loading from '../../components/Loading/Loading'

export default function HomePage() {

    // const [ loading, setLoading ] = useState(false)

    // useEffect(()=>{
    //     setLoading(true)
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 2000);
    // },[])

    // if (loading) return <Loading />
    
    return (
        <div>
           <Hero />
           <div style={{marginTop: 200}}>
               <HomeProject />
           </div>
        </div>
    )
}
