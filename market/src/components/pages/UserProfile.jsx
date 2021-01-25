import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Route, Redirect, Link } from "react-router-dom";
import axios from "axios";

export default function UserProfile(props) {
  const [userDetail, setUserDetail] = useState({});
 


  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/user/${props.user._id}`)
      .then(data => {
        setUserDetail(data);
        console.log("data :", data)
        console.log("give me data :", userDetail);
        // console.log("data :", data)
      })
      .catch((err) => console.log(err));

      
  }, []);
  

  //functional

   //map for products   







  //JSX
  return (
    <> 
      <Container>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <div className="left-side">
              {userDetail && 
                    (
                        <>
                        <div>
                            <img
                                className="img"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJUrrrKLWMi_q3pHEePQ6tU2SR8KFm4A0ntA&usqp=CAU"
                                alt=""
                            />
                        </div>
                        <div className="info-user">
                            <h2>{userDetail.data.name}</h2>
                        </div>
                        </>
                    )}
              <Button
                style={{
                  backgroundColor: "#2C3A47",
                  fontSize: "2.5vh",
                  border: "0",
                  borderRadius: "15px",
                }}
                className="colorlink"
              >
                <Link to="/product">Add Product</Link>
              </Button>
              <Button
                as={Link}
                to="/reset"
                style={{
                  backgroundColor: "#2C3A47",
                  fontSize: "2.5vh",
                  border: "0",
                  borderRadius: "15px",
                }}
                className="colorlink"
              >
                Change Password
              </Button>
            </div>
          </Col>

          <Col>
            <div className="right-side">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />{" "}
                {/*here img product nawer */}
                <Card.Body>
                  <Card.Title>{}</Card.Title> {/*here name product nawer */}
                  <Card.Text>
                    {" "}
                    {/*Descriptions product */}
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Edit</Button>
                  <Button variant="primary">Delete</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
