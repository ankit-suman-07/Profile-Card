import React from 'react';
import { useGetData } from '../api/GetDetail.js';
import "./Card.css";

import MapIcon from "../assets/map.png";
import MaleIcon from "../assets/male.png";
import FemaleIcon from "../assets/female.png";

const Cards = () => {
    // const [userName, setUsername] = useState("");
    const { details } = useGetData();

    // If details is null, return loading indicator or null
    if (!details) {
        return <div>Loading...</div>;
    }
    else {
        console.log(details)
        //setUsername(details.results[0].name.first)
    }

    return (
        <div className='card' >
            <div className='card-outline' >

                <div className='inner-card' >
                    <div className='card-row top' >
                        Cryptonet Technologies Private Limited
                    </div>
                    <div className='card-row mid' >
                        <div className='card-mid-left' >
                            <div className='email' >{(details.email).toUpperCase()}</div>
                        </div>
                        <div className='card-mid-right' >
                            <div className='image' >
                                <img src={details.picture.large} alt='user-icon' />
                            </div>
                            <div className='name' >
                                <span>{(details.name.title).toUpperCase()}.</span>
                                <span>{(details.name.first).toUpperCase()}</span>
                                <span>{(details.name.last).toUpperCase()}</span>
                            </div>
                            <div className='detail' >
                                <div className='icon' >
                                    <img src={details.gender === "female" ? FemaleIcon : MaleIcon} alt='gender-icon' />
                                </div>
                                {/* <span>{details.gender}</span> */}
                                <span>{details.dob.age} years</span>
                            </div>
                            <div className='address' >
                                <div className='icon' >
                                    <img src={MapIcon} alt='map icon' />
                                </div>
                                <span>{details.location.city},</span>
                                <span>{details.location.country}</span>
                            </div>
                        </div>
                    </div>
                    <div className='card-row bottom' >
                        {details.phone}
                    </div>
                </div>
            </div>
            {/* <h1>User Details</h1>
            <p>{details.picture.large}</p>
            <img src={details.picture.large} alt='user-image' />
            <p>{details.name.title}</p>
            <p>{details.name.first}</p>
            <p>{details.name.last}</p>
            <p>{details.gender}</p>
            <p>{details.phone}</p>
            <p>{details.email}</p>
            <p>{details.location.city}</p>
            <p>{details.location.country}</p>
            <p>{details.dob.age}</p> */}


        </div >
    );
};

export default Cards;
