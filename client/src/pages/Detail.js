import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import ArticleList from "../components/ArticleList";
import { List } from "../components/List";
import ActivityList from "../components/ActivityList";
import Footer from "../components/Footer";
import API from "../utils/API";
import Carousel from "../components/Carousel";

function Detail(props) {
  const [book, setBook] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  useEffect(() => {
    API.getBook(props.match.params.id)
      .then(res => setBook(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Carousel>
            <h1>
              {book.title} by {book.author}
            </h1>
          </Carousel>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <article>
            <h1>New Articles</h1>
            <p>
              {/* <ArticleList> */}
              {/* <List>
                <Articles>
                  {book.synopsis}
                </Articles>
              </List> */}
              {/* </ArticleList> */}
            </p>
          </article>
        </Col>
        <Col size="md-6">
          <activity>
            <h1>Activities Near You</h1>
            <p>

            </p>
          </activity>
        </Col>
      </Row>
      {/* <Row>
        <Col size="md-2">
          <Link to="/">← Back to Authors</Link>
        </Col>
      </Row> */}
      <Footer />
    </Container>
  );
}


export default Detail;
