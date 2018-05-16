module.exports = {
  sources: {
    repoUrl: 'https://github.com/KingQuiver/DropSearch'
  },
  oauth: {
    clientId: process.env.GITHUB_CLIENT_ID || 'b8a1869eb47788761c70',
    clientSecret: process.env.GITHUB_CLIENT_SECRET || '30c5c38645e7059edd0680d9b5e8922ab8edebe9',
    authorizationUrl: 'http://github.com/login/oauth/authorize',
    tokenUrl: 'https://github.com/login/oauth/access_token',
    useBasicAuthorizationHeader: false,
    // don't touch me
    redirectUri: 'http://localhost'
  }
};
