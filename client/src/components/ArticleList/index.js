import React from "react";
import ArticleCard from "../ArticleCard";

class ArticleList extends React.Component {

    render() {

        return (
            <div className="article-list-container">
                <h2 className="article-list-title">Articles</h2>
                {this.props.results.map(article => (
                    <ArticleCard
                        title={article.assetName}
                        url={article.contactPhone}

                    // key={article._id}
                    // id={article._id}
                    />
                )
                )}
            </div>
        )
    }
};

export default ArticleList;
