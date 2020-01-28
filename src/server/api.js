let express = require("express"),
    path = require('path'),
    bodyParser = require('body-parser'),
    nodeMailer = require('node-mailer');

let app = express();

let server = app.listen(process.env.PORT || 5000, function(){
  let port = server.address().port;
  console.info("Server started at http://localhost:%s", port);
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.post('/api/contact/proposal', function (req, res) {

  console.log('req', req)

  console.log('res', res)

  res.headers.Accept = 'application/json'
  res.headers.credentials = 'same-origin'
  res.headers['Access-Control-Allow-Origin'] = true
  res.headers['Content-Type'] = 'application/json'

  let transporter = nodeMailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
          // should be replaced with real sender's account
          user: 'hello@gmail.com',
          pass: 'test'
      }
  });
  let mailOptions = {
      // should be replaced with real recipient's account
      to: 'info@gmail.com',
      subject: req.body.subject,
      text: req.body.message
  };
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
  });
  res.writeHead(301, { Location: 'index.html' });
  res.end();
});


function buildHeaders() {
  const headers = {}

  headers.Accept = 'application/json'
  headers.credentials = 'same-origin'
  headers['Access-Control-Allow-Origin'] = true
  headers['Content-Type'] = 'application/json'

  return headers
}

const checkHttpStatus = async response => {
  const contentType = response.headers.get('content-type')
  const isJSON = contentType.includes('application/json')

  if (isJSON) {
    try {
      const responseBody = await response.json()

      return {
        ...responseBody,
        statusCode: response.status,
      }
    } catch (err) {
      return fetchFailure(err)
    }
  } else if (response.ok) {
    const responseBody = await response.text()
    return responseBody
  }

  console.error('There was an error making your request')
}

const fetchFailure = err => {
  console.error('There was an error making your request.\n', err)
}

function apiCall({ method, endpoint, data }) {
  const config = {
    method: method.toUpperCase(),
    headers: buildHeaders(),
    body: JSON.stringify(data),
  }
  const url = buildUrl(endpoint)

  return fetch(url, config)
    .then(checkHttpStatus)
    .catch(fetchFailure)
}
