// import React from "react";
import React, { useEffect, useState } from "react";
import UserAccountNav from "../components/UserAccountNav";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import ArticleList from "../components/ArticleList";
import { List } from "../components/List";
import ActivityList from "../components/ActivityList";
import Footer from "../components/Footer";
import API from "../utils/API";
import Carousel from "../components/Carousel";
import _ from 'lodash';
function UserAccountPage (props) {
    useEffect(() => {
        console.log("GETTING ACTIVITIES!!!!!---------------------------------")
        API.getActivity('art')
            .then(res => {
                console.log("WE GOT THE DATA ", res.data.results);
                var receivedData = res.data.results;
                setActivity(_.uniqBy(receivedData, 'assetName'))
            })
            .catch(err => console.log(err));
        console.log("GETTING Articles!!!!!---------------------------------")
        API.getArticles('dance')
            .then(res => {
                console.log("WE GOT article DATA ", res.data.results)
                var receivedArticleData = res.data.results;
                setArticle(_.uniqBy(receivedArticleData, 'assetName'))
                // setArticle(res.data.results)
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <Container fluid>
            <UserAccountNav />
            <Row>
                <Col size="md-12">
                    <Carousel>

                    </Carousel>
                </Col>
            </Row>
            <Row>
                <Col size="md-6">
                    <ArticleList results={ article }></ArticleList>
                </Col>
                <Col size="md-6">
                    <ActivityList results={ activity }></ActivityList>
                </Col>
            </Row>

            <Footer />
        </Container >
    );
}

export default UserAccountPage;