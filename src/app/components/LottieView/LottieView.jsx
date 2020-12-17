import Lottie from 'react-lottie';
import React from 'react'

export default function LottieView({animation,inverted, width, height, ...props}) {
  
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animation,
      };
    return (
        <> {inverted ?
            <Lottie options={defaultOptions}
                height={height}
                width={width}
                style={{
                    transform: 'scaleX(-1)' 
                }} 
                />:
                <Lottie options={defaultOptions}
                height={height}
                width={width}
                />
            }
        </>
    )
}