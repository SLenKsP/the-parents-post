
import React from "react";
import API from "../../utils/API";
import AOS from "aos";


class ActivityCard extends React.Component {

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

    constructor(props, context) {
        super(props, context);
        AOS.init();
    }

    componentWillReceiveProps() {
        AOS.refresh();
    }

    render() {

        return (
            <div data-aos="flip-up">
                <div className="card-panel hoverable">
                    <h5>{this.props.title}</h5>
                    <a href={this.props.url}>To Activity</a>
                    <p>Description: {this.props.summary}</p>
                    <button
                        className="btn waves-effect waves-light hoverable"
                        value={this.props.id}
                        onClick={this.handleFormSubmit}
                    >Save Activity</button>
                </div>
            </div>
        )
    }
};

export default ActivityCard;

