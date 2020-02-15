import React from "react";
import SavedArticleCard from "../SavedArticleCard";
import API from "../../utils/API";

class SavedArticleList extends React.Component {

    state = {
        results: []
    }

    componentDidMount() {
        console.log("Component mounted");
        this.getSavedArticles();
    }

    getSavedArticles() {
        API.getSaved()
            .then(res => {
                console.log("'Saved Response");
                console.log(res);
                this.setState({
                    results: res.data
                });
            })
            .catch(err => console.log(err));
    }


    render() {
        return (
            <div>
                {this.state.results.map(article => (
                    <SavedArticleCard
                        getSavedArticles={this.getSavedArticles}
                        title={article.title}
                        url={article.url}
                        summary={article.summary}
                        key={article._id}
                        id={article._id}
                    />
                )
                )}
            </div>
        )
    }
}

export default SavedArticleList;