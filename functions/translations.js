const homepageData = require('./data/homepage.json');

const translations = {
    homepage: homepageData,
};

exports.handler = async(event, context) => {
    
    const { file } = event.queryStringParameters;
    return {
        statusCode: 200,
        body: JSON.stringify(translations[file])
    }
  };