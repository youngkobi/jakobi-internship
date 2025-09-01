import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import CustomArrows from "./slider";
import { Carousel } from "react-bootstrap";

const HotCollections = () => {
  const [api, setApi] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchApi();
  }, []);

  async function fetchApi() {
    setLoading(true)
    const { data } = await axios.get(
      "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections"
    );
    setApi(data);
    setLoading(false)
   
  }

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
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
            <CustomArrows />
          )}
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
