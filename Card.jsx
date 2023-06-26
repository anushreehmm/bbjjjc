import React from "react";

//eslint-disable-next-line
const Card = (props) =>
{
    return(
        <div style={{backgroundColor: "lightgreen" , margin: 3, padding: 3, display: "inline-block", animation: "grow 3s", border: 3 ,boxShadow: 50, textAlign: "center", borderWidth: 5}}>
            <><img alt='robots' src={`https://robohash.org/${props.id}?`} style={{height: 200, width: 200}} /><div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div></>
        </div>
    );

 }
export default Card;