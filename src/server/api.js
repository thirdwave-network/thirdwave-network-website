let express = require("express"),
    path = require('path'),
    bodyParser = require('body-parser'),
    nodeMailer = require('nodemailer'),
    cors = require('cors');

let app = express();

let server = app.listen(process.env.PORT || 5000, function(){
  let port = server.address().port;
  console.info("Server started at http://localhost:%s", port);
});

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,FETCH');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

app.use(bodyParser.json());

app.post('/api/contact/proposal', function (req, res) {

  console.log('req', req)

  console.log('res', res)

  let transporter = nodeMailer.createTransport({
      host: process.env.TRANSPORTER_SMTP_HOST,
      port: process.env.TRANSPORTER_SMTP_PORT,
      secure: false,
      auth: {
          // should be replaced with real sender's account
          user: process.env.TRANSPORTER_SMTP_USER,
          pass: process.env.TRANSPORTER_SMTP_PASSWORD
      }
  });
  let mailOptions = {
      // should be replaced with real recipient's account
      to: 'tomek@thirdwave.network',
      subject: req.body.subject,
      text: req.body.message
  };
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
  });
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end();
});


function buildHeaders() {
  const headers = {}

  headers.Accept = 'application/json'
  headers.credentials = 'same-origin'
  // headers['Access-Control-Allow-Origin'] = true
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
