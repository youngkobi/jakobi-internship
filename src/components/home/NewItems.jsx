import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewItemsSlider from "./newItemsSlider";

const NewItems = () => {

const [loading, setLoading] = useState(true)


useEffect(() => {
   setLoading(true)
   setLoading(false)
   
  }, []);
  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
            {loading ? 
            new Array(4).fill(0).map((element, index) => (
              <div className="wrapper" key={index}>
                          <div className="nft_coll  ">
                            <div className="nft_wrap skelton-box">   
                            </div>
                            <div className="pp-skelly">
                            <div className=" skelton-pp">
                              _
                            </div>
                              <i className="fa fa-check"></i>
                              </div>
                            <div className="nft_coll_info ">
                            
                              <div className="skelton-title"></div>
                              <span className="skelton-code"></span>
                            </div>
                          </div>
                        </div>
            ))
           : (
            <NewItemsSlider />
          )}

          
        </div>
      </div>
    </section>
  );
};

export default NewItems;
