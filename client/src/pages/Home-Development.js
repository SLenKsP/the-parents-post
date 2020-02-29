// import React from "react";
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Nav/index'
import { Link } from 'react-router-dom'
import { Col, Row, Container } from '../components/Grid'
import ArticleList from '../components/ArticleList'
import { List } from '../components/List'
import ActivityList from '../components/ActivityList'
import Footer from '../components/Footer'
import API from '../utils/API'
import Carousel from '../components/Carousel'
import _ from 'lodash'
function Home(props) {
  const [activity, setActivity] = useState({})
  const [article, setArticle] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  useEffect(() => {
    console.log('GETTING ACTIVITIES!!!!!---------------------------------')
    API.getActivity('art')
      .then(res => {
        console.log('WE GOT THE DATA ', res.data.results)
        var receivedData = res.data.results
        setActivity(_.uniqBy(receivedData, 'assetName'))
      })
      .catch(err => console.log(err))
    console.log('GETTING Articles!!!!!---------------------------------')
    API.getArticles('development')
      .then(res => {
        console.log('WE GOT article DATA ', res.data.results)
        var receivedArticleData = res.data.results
        setArticle(_.uniqBy(receivedArticleData, 'assetName'))
        // setArticle(res.data.results)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <Container fluid>
      <Navbar />
      <Row>
        <Col size="md-12">
          <Carousel></Carousel>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <ArticleList results={article}></ArticleList>
        </Col>
        <Col size="md-6">
          <ActivityList results={activity}></ActivityList>
        </Col>
      </Row>
      <Footer />
    </Container>
  )
}
export default Home
