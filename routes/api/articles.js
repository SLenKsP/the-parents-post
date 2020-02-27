const axios = require("axios");

module.exports = {
    getArticles: function (req, res) {
        axios.get(`http://api.amp.active.com/v2/search?query=health&category=articles&api_key=yc4vjtvmn4wdemn4u76j8aru`)
            .then(apiResults => {
                res.json(apiResults);
                console.log(apiResults);
            })
            .catch(err => {
                res.json(err);
            });
    }
};



