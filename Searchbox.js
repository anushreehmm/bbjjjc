import React from "react";

const Searchbox = ({searchfield, SearchChange})=>
{
return (
    <div>
        <input type = 'search'
        className="pa3 b3 bg-lightest-blue"
         placeholder="SEARCH ROBOTS" 
         style={{padding: 3 , backgroundColor: "lightblue", textAlign: "left" }}
         onChange={SearchChange}/>
    </div>
)
}
export default Searchbox;