import React from 'react'
import { Nave } from "./Nave"
import { Link } from "react-router-dom";
import { Button, Carousel } from 'react-bootstrap';




export const Header = (props) => {



    const handlerClickPc = (e) => {
        // e.preventdefault();


    }




    return (
        <>
            <Carousel>
                <Carousel.Item className="continaer-img">
                    <img
                        className="d-block w-100"
                        src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4t6wq?ver=6fb4&q=0&m=8&h=431&w=767&b=%23FFFFFFFF&l=f&x=868&y=207&s=1252&d=703&aim=true"
                        alt="First slide"
                        style={{ height: "600px" }}
                    />
                    <Carousel.Caption>
                        <h3>Category PC</h3>
                        <Button style={{ backgroundColor: "#2C3A47", fontSize: "2.5vh", border: "0", borderRadius: "15px" }} className="colorbutt">
                            <Link className="colorlink" to="/pc">Go to Category</Link>
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="continaer-img">
                    <img
                        className="d-block w-100"
                        src="https://cdn.arstechnica.net/wp-content/uploads/2020/10/ps5-back-compat-800x450.jpg"
                        alt="Third slide"
                        style={{ height: "600px" }}
                    />

                    <Carousel.Caption>
                        <h3>Category Playstions</h3>
                        <Button style={{ backgroundColor: "#2C3A47", fontSize: "2.5vh", border: "0", borderRadius: "15px" }}>
                            <Link className="colorlink" to="/playstions">Go to Category</Link>
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="continaer-img">
                    <img
                        className="d-block w-100"
                        src="https://sm.pcmag.com/t/pcmag_in/review/x/xbox/xbox_b245.1920.jpg"
                        alt="Third slide"
                        style={{ height: "600px" }}
                    />

                    <Carousel.Caption>
                        <h3>Category Xbox</h3>
                        <Button style={{ backgroundColor: "#2C3A47", fontSize: "2.5vh", border: "0", borderRadius: "15px" }} className="colorbutt">
                            <Link className="colorlink" to="/xbox">Go to Category</Link>
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>

    )
}