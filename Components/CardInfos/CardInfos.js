import React from 'react';

import CardInfo from '../CardInfo/CardInfo';
const CardInfos = () => {
    const cardData=[
        {
            id:1,
            name:"Get that 11 line in 30 days",
            icon:"https://i.ibb.co/fN09MjL/man-jumping-with-arms-raised.png",
            bgClass:"bg-info bg-gradient-to-r from-info to-success"
        },
        {
            id:2,
            name:" 14 Days sherd  challenge",
            icon:"https://i.ibb.co/x29xnSx/stretching-exercises.png",
            bgClass:"bg-info bg-gradient-to-r from-info to-success"
        },
        {
            id:3,
            name:"Get flat belly in 30 days",
            icon:"https://i.ibb.co/B6ShS3d/weightlifting.png",
            bgClass:"bg-info bg-gradient-to-r from-info to-success"
        }
    ]
    return (
        <div className='rounded-3 bg-info bg-gradient-to-r from-info to-success rounded-3xl mt-8'>
        <div className='grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3  '>
        {
            cardData.map(Card=><CardInfo 
            key={Card.id}
            Card={Card}
            >

            </CardInfo>
               


            )
        }
        
    </div>
    </div>
    );
};

export default CardInfos;