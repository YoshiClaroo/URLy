const axios = require('axios');

exports.handler = async (event, context) => {
  try {
    const { token } = JSON.parse(event.body);
    const secretKey = process.env.RECAPTCHA_SECRET_KEY; // Usa la variable de entorno
    if (!secretKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ success: false, error: 'Clave secreta no configurada' })
      };
    }
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

    const response = await axios.post(verificationUrl);
    return {
      statusCode: 200,
      body: JSON.stringify({ success: response.data.success })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: 'Error del servidor: ' + error.message })
    };
  }
};
