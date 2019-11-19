function responseHandler(response) {
  if(response.ok) return response.json();
  return response.json().then(body => { 
    throw body.error; 
  });
}


function getHeaders() {
  const headers = { 'Content-Type': 'application/json' };
  return headers;
}

export function getCandidates() {
  return fetch('https://democratic-primary-server.herokuapp.com/api/getcandidates', {
    headers: getHeaders()
  })
    .then(responseHandler);
}