import React from 'react'
import NoPriority from '../../Assets/Images/NoPriority.svg'
import LowPriority from '../../Assets/Images/LowPriority.svg'
import MidPriority from '../../Assets/Images/MidPriority.svg'
import HighPriority from '../../Assets/Images/HighPriority.svg'
import UrgentPriority from '../../Assets/Images/UrgentPriority.svg'
import UrgentPriorityGrey from '../../Assets/Images/UrgentPriorityGrey.svg'

import './Card.css'

export default function Card(props) {
    return (
        <>
            <div className="card-container">
                <div className="card-id-wrapper">
                    <div className="card-id">{props.cardDetails.id}</div>
                    <div className="card-profile">
                        <div className="card-profile-initial">{props.cardDetails.userObj.name[0]}{props.cardDetails.userObj.name[1]}</div>
                        <div className={props.cardDetails.userObj.available ? "card-profile-initial-available card-profile-initial-available-true" : "card-profile-initial-available"}></div>
                    </div>
                </div>
                <div className="card-title">
                    {props.cardDetails.title}
                </div>
                <div className="card-tag">
                    {
                        {
                            0: <div className="card-tag-icon"><img src={NoPriority} alt="icon" /></div>,
                            1: <div className="card-tag-icon"><img src={LowPriority} alt="icon" /></div>,
                            2: <div className="card-tag-icon"><img src={MidPriority} alt="icon" /></div>,
                            3: <div className="card-tag-icon"><img src={HighPriority} alt="icon" /></div>,
                            4: <div className="card-tag-icon"><img src={UrgentPriorityGrey} style={{ opacity: 1 }} alt="icon" /></div>
                        }[props.cardDetails.priority]
                    }

                    {
                        props.cardDetails.tag.map((tag) => {
                            return (
                                <div className="card-tag-box">
                                    <div className="card-tag-title">{tag}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
