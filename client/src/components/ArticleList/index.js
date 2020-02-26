import React from "react";
import ArticleCard from "../ArticleCard";

class ArticleList extends React.Component {

    render() {

        return (
            <div className="article-list-container">
                <h2 className="article-list-title">Articles</h2>
                {
                    // console.log((this.props.results))
                    // filter(element => element.registrationUrlAdr != "" ? true : false)
                    Object.values(this.props.results).map(article => (
                        <ArticleCard
                            title={article.assetName}
                            url={article.urlAdr}
                            summary={article.assetDescriptions[0].description || ""}
                        // key={article._id}
                        // id={article._id}
                        />
                    )
                    )
                }
            </div>
        )
    }
};

export default ArticleList;
