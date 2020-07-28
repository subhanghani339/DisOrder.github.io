import React from 'react'

const Help = () => {
    return (
        <div  style={{backgroundColor: '#f4f4f5', height: '100vh'}}> 
            <div className="p-2" style={{marginLeft: '130px'}}>
                <button className="btn " style={{border: '1px solid black'}}>Cancel</button>
                <button className="btn" style={{border: '1px solid black', marginLeft: '10px'}}>Help</button>
            </div>

            <div className="fluid-container" style={{backgroundColor: '#fafafa', width: '20vw', height: '92vh'}}>
                    <h3 style={{color: '#a4a3b3', fontSize: '16px'}} className="p-4">Product Name</h3>

                    <p style={{color: '#6c7279', fontSize: '14px'}} className="px-4">Enter a generic name for your product. If the product contains different variants, you will be able to create more specific names when you create your variants later on.</p>
                    <p style={{color: '#6c7279', fontSize: '14px', margin: '40px 0px 0px'}} className="px-4">Example <br /> if you’re creating a product for a T-Shirt, use a name like “Organic Cotton Tee”. You will later be able to add variants under it with options such as Colors and Sizes, each of which can be named “Organic Cotton Tee - [Variant Name].</p>
                </div>

            </div>
    )
}

export default Help;