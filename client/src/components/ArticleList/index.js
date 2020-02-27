import React from "react";
import ArticleCard from "../ArticleCard";
import Axios from "axios";
import API from "../../utils/API";

class ArticleList extends React.Component {

    constructor () {
        super();
        this.state = {
            title: "",
            url: ""
        }
    }

    componentDidMount () {
        API.getArticlesFromAPI()
            .then(results => {
                console.log(JSON.stringify(results, null, 2));
            })
    }

    render () {

        return (
            <div className="article-list-container">
                <h2 className="article-list-title">Articles</h2>
                { this.props.results.map(article => (
                    <ArticleCard
                        title={ this.state.title}
                        url={ article.contactPhone }

                    // key={article._id}
                    // id={article._id}
                    />
                )
                ) }
            </div>
        )
    }
};

export default ArticleList;
