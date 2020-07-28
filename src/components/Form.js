import React from 'react'
import ProductBar from './ProductBar';
import Help from './Help';

const Form = () => {

    return (
        <>
        <div className="d-flex align-items-stretch flex-column" >

        <div>
        <ProductBar />
        </div>

        <div style={{maxHeight:'92vh',overflow:'auto'}}>
        <form action="#" style={{marginLeft: "40px",marginRight: "50px"}}>
        
        <div className="form-inline" style={{marginBottom: '10px'}}>
        <label for="Product" style={{marginLeft: '90px'}}>Product Name <span style={{color: 'red'}}>*</span></label>
        <input type="text" className="form-control" id="Product" name="product" style={{marginLeft: '10px', width: '500px'}} />
        </div>

        <div className="form-inline" style={{marginBottom: '10px'}}>
            <label for="SKU" style={{marginLeft: '170px'}}>SKU</label>
            <input type="number" className="form-control" id="SKU" name="SKU" style={{marginLeft: '10px', width: '500px'}} />
            <input type="checkbox" className="form-check-input" value="" style={{marginLeft: '10px',margiRight: '5px'}} />
            Autogenerate SKU
        </div>
        
        <div className="form-inline" style={{marginBottom: '10px'}}>
            <label for="Supplier" style={{marginLeft: '142px'}}>Supplier</label>
                <select class="form-control" id="Supplier" style={{marginLeft: '10px', width: '500px'}}>
                    <option>Select a Supplier</option>
                    <option>Adidas Supplies (DEMO)</option>
                    <option>Adidas Supplies (DEMO)</option>
                    <option>Adidas Supplies (DEMO)</option>
                    <option>Adidas Supplies (DEMO)</option>
                </select>
            <button class="btn" data-toggle="modal" data-target="#myModal" style={{border: '1px solid black',marginLeft: '15px'}}> <b>+</b> NEW</button>
        </div>

        <div className="form-inline" style={{marginBottom: '10px'}}>
            <label for="Product-Type" style={{marginLeft: '108px'}}>Product Type</label>
                <select className="form-control" id="Product-Type" style={{marginLeft: '10px', width: '500px'}}>
                    <option >Select a Type</option>
                    <option >Shirt</option>
                    <option >Shoes</option>
                    <option >Jeans</option>
                    <option >Sweatshirt</option>
                </select>
            <button className="btn" style={{border: '1px solid black',marginLeft: '15px'}}> <b>+</b> NEW</button>
        </div>

        <div className="form-inline" style={{marginBottom: '30px'}}>
            <label for="brand" style={{marginLeft: '160px'}}>Brand</label>
                <select className="form-control" id="brand" style={{marginLeft: '10px', width: '500px'}} >
                    <option selected>Select a Brand</option>
                    <option>Acme</option>
                    <option>Adidas</option>
                    <option>Bata</option>
                    <option>Nike</option>
                </select>
            <button className="btn" style={{border: '1px solid black' ,marginLeft: '15px'}}> <b>+</b> NEW</button>
        </div>

        <div className="form-inline" style={{marginBottom: '10px'}}>
            <button className="btn btn-light" style={{marginLeft: '210px'}}>B</button>
            <button className="btn btn-light">I</button>
            <button className="btn btn-light">U</button>
            <button className="btn btn-light" style={{marginLeft: '20px'}}>X</button>
            <button className="btn btn-light">Y</button>
            <button className="btn btn-light" style={{marginLeft: '20px'}}>HTML</button>
        </div>

        <div className="form-inline" style={{marginBottom: '30px'}}>
            <label for="Product-Description" style={{marginLeft: '60px'}}>Product Description</label>
            <textarea class="form-control" rows="5" id="Product-Description" style={{marginLeft: '10px', width: '500px'}}></textarea>
        </div>
                        
        <div className="form-inline" style={{marginBottom: '10px'}}>
            <label style={{marginLeft: '9.76vw'}}>Weight</label> 
            <input type="text" className="form-control" id="weight" name="weight" style={{width: '430px',marginLeft: '10px',borderTopRightRadius: '0px',borderBottomRightRadius: '0px'}} />
            <select className="form-control" id="brand" style={{borderTopLeftRadius: '0px',borderBottomLeftRadius: '0px'}}>
                <option>g</option>
                <option>kg</option>
                <option>oz</option>
                <option>lb</option>
            </select>
        </div>
                        
        <div className="form-inline" style={{marginBottom: '50px'}}>
            <label style={{marginLeft: '11.1vw'}}>Tags</label>
            <input type="text" className="form-control" id="tags" name="tags" placeholder="e.g. Summer 2020" style={{width: '500px',marginLeft: '10px'}} />
        </div>

        {/* <div className="form-group" style={{marginLeft: '220px',marginBottom: '50px'}}>
            <p>
                <b>Configure how stock for this product is tracked: </b>
            </p>

            <label className="form-check-label">
            <input className="form-check-input" type="checkbox" name="remember" /> Manage Stock Levels
            </label>
            <br />

            <label className="form-check-label">
            <input className="form-check-input" type="checkbox" name="remember" /> Sellable
            </label>
            <br />

            <label className="form-check-label">
            <input className="form-check-input" type="checkbox" name="remember" /> Batch Tracked
            </label>
        </div>           */}

        <p style={{marginLeft: '210px'}}><strong>Provide initial values to set your product up with:</strong></p>
        <div className="form-inline" style={{marginBottom: '10px'}}>
            <label for="Initial-Stock" style={{marginLeft: '110px'}}>Initial Stock <span style={{color: 'red'}}>*</span></label>
            <input type="text" className="form-control" id="Initial-Stock" name="Initial-Stock" style={{marginLeft: '10px', width: '500px'}} />
        </div>

        <div className="form-inline" style={{marginBottom:'10px'}}>
            <label for="brand" style={{marginLeft: '51px'}}>Initial Stock Location</label>
            <select className="form-control" id="brand" style={{marginLeft: '10px', width: '500px'}} >
                <option selected>Primary Location</option>
            </select>
        </div>

        <div className="form-inline" >
            <label style={{marginLeft: '122px'}}>Initial Cost</label>
                <div className="input-group-prepend">
                    <span className="input-group-text bg-white" style={{marginLeft: '10px',borderTopRightRadius: '0px',borderBottomRightRadius: '0px'}}><b>Rs</b></span>
                </div>
            <input type="text" class="form-control" style={{width: '460px', borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px'}} />
        </div>
        <p style={{color: '#a4aeb3', marginBottom: '50px', fontSize: 'small', marginLeft: '210px'}}>Initial Cost is required if Initial Stock on Hand is greater than zero.</p>

        <div className="form-inline" style={{marginBottom: '10px'}}>
            <label style={{marginLeft: '130px'}}>Buy Price</label>
                <div className="input-group-prepend">
                    <span className="input-group-text bg-white" style={{marginLeft: '10px', borderTopRightRadius: '0px', borderBottomRightRadius: '0px'}}><b>Rs</b></span>
                </div>
            <input type="text" className="form-control" style={{width: '460px', borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px'}} />
        </div>

        <div className="form-inline" style={{marginBottom: '10px'}}>
            <label style={{marginLeft: '83px'}}>Wholesale Price</label>
                <div className="input-group-prepend">
                    <span className="input-group-text bg-white" style={{marginLeft: '10px', borderTopRightRadius: '0px', borderBottomRightRadius: '0px'}}><b>Rs</b></span>
                </div>
            <input type="text" className="form-control" style={{width: '460px', borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px'}} />
        </div>

        <div className="form-inline" style={{marginBottom: '50px'}}>
                <label style={{marginLeft: '117px'}}>Retail Price</label>
                <div className="input-group-prepend">
                    <span className="input-group-text bg-white" style={{marginLeft: '10px', borderTopRightRadius: '0px', borderBottomRightRadius: '0px'}}><b>Rs</b></span>
                </div>
                <input type="text" className="form-control" style={{width: '460px', borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px'}} />
        </div>

        <div style={{marginBottom: '50px', marginLeft: '-20px'}}>
            <p>
                Product Variants
                <span style={{marginLeft: '30px', color: '#A4AEB3'}}>A single variant will be created automatically unless you enable the multiple variant option.</span>
            </p>

            <div className="form-inline" style={{border: '1px solid green', padding: '0px 30px', width: '98%', borderRadius: '10px'}}>
                <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" value="" /> 
                    <p style={{marginTop: '13px'}}>This product has multiple variants.</p>
                </label>
            </div>
        </div>

        <div style={{marginBottom: '30px', marginLeft: '-20px'}}>
            <p>
                Product Pack Sizes
                <span style={{marginLeft: '30px',color: '#A4AEB3'}}>Pack sizes allow you to buy or sell products in custom units, such as a case or a carton.</span>
            </p>

            <div className="form-inline" style={{border: '1px solid green', padding:'0px 30px', width: '98%', borderRadius: '10px'}}>
                <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" value="" />
                    <p style={{marginTop: '13px'}}>This product is brought in and/or sold in packs</p>
                </label>
            </div>
        </div>

        <hr />
        <button type="submit" class="btn text-white" style={{backgroundColor: '#63BF1B',marginBottom:'15%'}}>Create Product</button>

    </form> 

        </div>
    </div>
    <Help />   
    </>
   )
}

export default Form;