import React from 'react'

const Section2 = () => {

    const imageStyle = {
        width: "500px",
        border: "solid black",
      
        height: "300px",

        padding: "20px",
        margin: "20px"
    };
    return (
        <div>
            <div>
                <img src="https://images.unsplash.com/photo-1551590192-8070a16d9f67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFib3V0JTIwdXN8ZW58MHx8MHx8fDA%3D"
                    style={imageStyle} />
            </div>
        </div>
    )
}

export default Section2
