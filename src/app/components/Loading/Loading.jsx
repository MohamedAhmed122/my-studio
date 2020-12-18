import { Backdrop } from '@material-ui/core'
import Lottie from 'react-lottie';
import Loader from '../../assets/Animations/animationLoading.json'
import React from 'react'

export default function Loading({...props}) {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: Loader,
      };
    return (
        <Backdrop style={{zIndex: 100, backgroundColor: 'white', }}{...props} open={true}>
            <Lottie options={defaultOptions}
              height={200}
              width={200}
              />
        </Backdrop>
    )
}
