
import React from "react";
import API from "../../utils/API";
import AOS from 'aos';


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

<<<<<<< HEAD
    render () {
=======
    constructor(props, context) {
        super(props, context);
        AOS.init();
    }

    componentWillReceiveProps() {
        AOS.refresh();
    }
>>>>>>> 8b3b006f9d500f26ea0f672ae61ae0daa8050329

    render() {
        return (
<<<<<<< HEAD
            <div className="card-panel hoverable">
                <h4>{ this.props.title }</h4>
                <a href={ this.props.url }>To Article</a>
                <p>Description: { this.props.summary }</p>
                <button
                    className="btn btn-primary"
                    value={ this.props.id }
                    onClick={ this.handleFormSubmit }
                >Save Article</button>
=======
            <div data-aos="flip-up">
                <div className="card-panel hoverable">
                    <h5>{this.props.title}</h5>
                    <a href={this.props.url}>To Article</a>
                    <p>Description: {this.props.summary}</p>
                    <button
                        className="btn waves-effect waves-light"
                        value={this.props.id}
                        onClick={this.handleFormSubmit}
                    >Save Article</button>
                </div>
>>>>>>> 8b3b006f9d500f26ea0f672ae61ae0daa8050329
            </div>
        )
    }
};


export default ArticleCard;

