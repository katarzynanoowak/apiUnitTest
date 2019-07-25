const axios = require('axios');
const { expect } = require('chai');

const BASE_URL = 'http://localhost:3000';

describe('POST /hello', function () {
  const body = {
    name: "Kasia"
  };
  it('should receive status code 200', async function() {
    const res = await axios.post(`${BASE_URL}/hello`, body);
    expect(res.status).to.equal(200);
  });

  it('should generate response message', async function() {
    const res = await axios.post(`${BASE_URL}/hello`, body);
    expect(res.data.message).to.equal("hello Kasia")
  });
  describe('GET /info', function(){
    it('should receive status code 200', async function() {
      const res = await axios.get('${BASE_URL}/info');
      expect(res).to.equal(status200);
    })
  })
});