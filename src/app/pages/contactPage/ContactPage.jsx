import React from 'react'


import ContactMain from '../../components/ContactMain/ContactMain'
import ContactHeader from '../../components/ContactHeader/ContactHeader'
import ContactSide from '../../components/ContactSide/ContactSide'

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

import './styleContactPage.css'

export default function ContactPage() {
    return (
        // <div style={{backgroundColor: '#eefcfd',}}>
        // <ContactHeader />
        // <div className='contact_page' >
        //     <div className='contact_page_left' >
        //         <ContactSide />
        //     </div>
        //     <div className='contact_page_right'>
        //         <ContactMain />
        //     </div>
        // </div>
        // </div>
        <div
        style={{
            background: 'linear-gradient(90deg,#051421,#042727)',
            height:'auto',
            width:'100%'
        }}>

            
        <div className='container' >

            <div className='card' >
                <img src={cityOfGod} alt="city of god"/>
                <h1 className='title'>city of god</h1>
                <div className='like_container'>
                <div> <ThumbUpAltIcon /> </div>  
                <p className='likes'>123</p>
            
                </div>
                </div>

            <div className='card' >
                <img src={Marvel} alt="city of god"/>
                <h1 className='title'>Marvel</h1>
                <div className='like_container'>
                <div> <ThumbUpAltIcon /> </div>  
                <p className='likes'>1001</p>
            
                </div>
                </div>

            <div className='card' >
                <img src={whatMenWant} alt="city of god"/>
                <h1 className='title'>what men want</h1>
                <div className='like_container'>
                <div> <ThumbUpAltIcon /> </div>  
                <p className='likes'>4402</p>
            
                </div>
                </div>

            <div className='card' >
                <img src={noTimeToDie} alt="city of god"/>
                <h1 className='title'>No Time To die</h1>
                <div className='like_container'>
                <div> <ThumbUpAltIcon /> </div>  
                <p className='likes'>89</p>
            
                </div>
                </div>

            <div className='card' >
                <img src={dracula} alt="city of god"/>
                <h1 className='title'>dracula</h1>
                <div className='like_container'>
                <div> <ThumbUpAltIcon /> </div>  
                <p className='likes'>13</p>
            
                </div>
                </div>


            <div className='card' >
                <img src={Jumanji} alt="city of god"/>
                <h1 className='title'>Jumanji</h1>
                <div className='like_container'>
                <div> <ThumbUpAltIcon /> </div>  
                <p className='likes'>230</p>
            
                </div>
                </div>

            <div className='card' >
                <img src={superPool} alt="city of god"/>
                <h1 className='title'> Super Pool</h1>
                <div className='like_container'>
                        <ThumbUpAltIcon />
                <p className='likes'>303</p>
            
                </div>
                </div>

            <div className='card' >
                <img src={mulan} alt="city of god"/>
                <h1 className='title'>Mulan</h1>
                <div className='like_container'>
                    <div> <ThumbUpAltIcon /> </div>    
                <p className='likes'>123</p>
            
                </div>
                </div>


            <div className='card' >
                <img src={nightSchool} alt="city of god"/>
                <h1 className='title'>Night School</h1>
                <div className='like_container'>
                <div> <ThumbUpAltIcon /> </div>    
                <p className='likes'>123</p>
            
                </div>
                </div>

            <div className='card' >
                <img src={mulan} alt="city of god"/>
                <h1 className='title'>mulan</h1>

                <div className='like_container'>
                      <div>  
                          {/* icon  */}
                          <ThumbUpAltIcon /> 
                          </div> 
                    <p className='likes'>123</p>
            
                </div>

            </div>
            


        </div>








        </div>
    )
}

const whatMenWant ='https://m.media-amazon.com/images/M/MV5BMTYxNjE2NjIwOF5BMl5BanBnXkFtZTgwMjE0MzkxNzM@._V1_.jpg'
const cityOfGod ='https://i.pinimg.com/originals/57/73/7b/57737bab7ccdd56dc851a0bacfd61d2b.jpg'

const Marvel ='https://sofy.tv/blog/wp-content/uploads/2017/12/upcoming-hollywood-movies-you-shouldnt-miss-1400x653-1505901970_1100x513.jpg'

const birdOfBery ='https://www.google.com/url?sa=i&url=https%3A%2F%2Findianexpress.com%2Farticle%2Fentertainment%2Fhollywood%2Ftop-10-hollywood-movies-of-2020-so-far-6470575%2F&psig=AOvVaw2paBWUWZ9X2plH38Md2pzk&ust=1608404644440000&source=images&cd=vfe&ved=0CAIQjRxqGAoTCPiKnruc2O0CFQAAAAAdAAAAABCaAQ'

const move1 ='https://www.google.com/url?sa=i&url=https%3A%2F%2Fworldfree4umovidownload.blogspot.com%2F2019%2F03%2Fhollywood-movies-collections.html&psig=AOvVaw2paBWUWZ9X2plH38Md2pzk&ust=1608404644440000&source=images&cd=vfe&ved=0CAIQjRxqGAoTCPiKnruc2O0CFQAAAAAdAAAAABChAQ'

const noTimeToDie ='https://static.toiimg.com/photo/73049203.cms'

const dracula ='https://wallpaperaccess.com/full/1923020.jpg'

const Jumanji ='https://i.pinimg.com/originals/99/c9/f0/99c9f01de72ba7e3418baf2c779cf342.jpg'

const superPool ='https://youthincmag.com/wp-content/uploads/2018/01/Deadpool-2-Poster-1-1024x649.jpg'

const mulan ='https://upload.wikimedia.org/wikipedia/en/1/17/Mulan_%282020_film%29_poster.jpg'

const nightSchool ='https://m.media-amazon.com/images/M/MV5BNjM0MmVjODEtNzYwZi00OWNkLWFhYzItNmVhNWFmYTg2NDQ3XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg'