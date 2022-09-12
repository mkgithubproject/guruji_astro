const fetch = require('node-fetch');
module.exports.home = function (req, res) {
    return res.render('home', {
        title: "Home"
    });
}
module.exports.horoscope_details = async function (req, res) {
    let dob = req.body.birthday.split('-');
    let data = { "day": parseInt(dob[2]), "month": parseInt(dob[1]), "year": parseInt(dob[0]), "hour": parseInt(req.body.hour), "min": parseInt(req.body.minute), "lat": parseFloat(req.body.lat), "lon": parseFloat(req.body.long), "tzone": parseFloat(req.body.tz )};
    const response1 = await fetch('https://json.astrologyapi.com/v1/birth_details', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
             "authorization": "Basic " + btoa(process.env.userId+":"+process.env.apiKey),
             'Content-Type': 'application/json' }
    });
    const birth_output = await response1.json();
    const response2 = await fetch('https://json.astrologyapi.com/v1/astro_details', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
             "authorization": "Basic " + btoa(process.env.userId+":"+process.env.apiKey),
             'Content-Type': 'application/json' }
    });
    const astro_output = await response2.json();

    const response3 = await fetch('https://json.astrologyapi.com/v1/basic_gem_suggestion', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
             "authorization": "Basic " + btoa(process.env.userId+":"+process.env.apiKey),
             'Content-Type': 'application/json' }
    });
    const gem_output = await response3.json();
    //console.log(astro_output);
    res.render('horoscope_details', {
        title: "ASTRO",
        birth:birth_output,
        astro:astro_output,
        gem:gem_output
    })
    return;
}