import React, { Component } from "react";
// import { Col, Row, Container } from 'react-bootstrap'
import imggif from "../images/Snackpacks_websitegif_800x800.gif"
export default class home extends Component {
  render() {
    return (
      <div>
        <div className="a" style={{ textAlign: "left", marginTop: "150px" }}>
          <h1 className="sidedebarHeading"> Super Delicious Cookies </h1>
          <p className="midHeading">
            {" "}
            that are also gluten free, vegan & allergy-friendly
          </p>
          <button className="lowButton">Shop Now</button>
        </div>

        <div class="container-fluid">
          <div class="row">
            <div class="single-grid col-12 col-md-4">
              <a href="home" class="navigate">
                <div class="outer">
                  <div class="first">
                    <h2> Crunchy Cookies </h2>
                    <div class="shop"> Shop</div>
                  </div>

                  <img
                    src={imggif}
                    class="img-responsive"
                    alt="Soft baked cookies " >
                    </img>
                </div>
              </a>
            </div>

            <div class="single-grid col-12 col-md-4">
              <a href="home" class="navigate">
                <div class="outer">
                  <div class="first">
                    <h2> Soft baked cookies </h2>
                    <div class="shop"> Shop</div>
                  </div>

                  <img
                    src="../images/Cookie_butter.png"
                    class="img-responsive"
                    alt="Soft baked cookies "
                    onMouseOver={(e) =>
                      (e.currentTarget.src = 
                        require("../images/Gingersnapcopy.webp"))
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.src = "../images/Cookie_butter.png")
                    }
                  ></img>
                </div>
              </a>
            </div>

            <div class="single-grid col-12 col-md-4">
              <a href="home" class="navigate">
                <div class="outer">
                  <div class="first">
                    <h2> Variety packs </h2>
                    <div class="shop"> Shop</div>
                  </div>

                  <img
                    src="../images/Variety_1.png"
                    class="img-responsive"
                    alt="Soft baked cookies "
                    onMouseOver={(e) =>
                      (e.currentTarget.src =
                        require("../images/ChocCh.png"))
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.src = "../images/Variety_1.png")
                    }
                  ></img>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
