const _storage = {}

const oAuth1TokenStore = {
  setTokenSecret: (token, tokenSecret) => _storage[token] = tokenSecret,
  getTokenSecret: (token) => _storage[token],
  removeTokenSecret: (token) => delete _storage[token],
}

export default oAuth1TokenStore;