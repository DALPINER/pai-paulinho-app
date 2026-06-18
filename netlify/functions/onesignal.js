exports.handler = async function(event, context) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'OPTIONS, POST'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: 'Method Not Allowed' };
  }

  try {
    const data = JSON.parse(event.body);
    const { apiKey, payload } = data;

    if (!apiKey || !payload) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing apiKey or payload' }) };
    }

    // Faz a chamada verdadeira para a OneSignal atuando como servidor
    const response = await fetch('https://api.onesignal.com/notifications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${apiKey}`
      },
      body: JSON.stringify(payload)
    });

    // Se o Netlify Node.js v18 embutir o fetch, ele deve virar JSON
    const result = await response.json();
    return {
      statusCode: response.status,
      headers,
      body: JSON.stringify(result)
    };
  } catch (err) {
    console.error("Erro na Netlify Function:", err);
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
