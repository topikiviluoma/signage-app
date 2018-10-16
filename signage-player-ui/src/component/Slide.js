import React from 'react'

const Slide = ({ image, changer }) => {
    const format = image.substring(image.length - 3)

    console.log('file format', format)
    if (format === 'mp4') {
        return (
            <video width="320" height="240" autoPlay>
                <source src={image} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        )
    }
    else {
        return (
            <img onClick={changer} src={image} height="480" width="640" alt="alt" ></img>
        )
    }
}


export default Slide