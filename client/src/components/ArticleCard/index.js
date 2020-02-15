
import React from "react";
import API from "../../utils/API";


class ArticleCard extends React.Component {

    handleFormSubmit = event => {
        event.preventDefault();
        console.log('submitting form');
        API.saveArticle({
            title: this.props.title,
            summary: this.props.summary,
            url: this.props.url
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    render() {

        return (
            <div className="article-card">
                <h2>{this.props.title}</h2>
                <a href={this.props.url}>To Article</a>
                <p>Description: {this.props.summary}</p>
                <button
                    className="btn btn-primary"
                    value={this.props.id}
                    onClick={this.handleFormSubmit}
                >Save Article</button>
            </div>

        )
    }
};

export default ArticleCard;

