/* for more detail refer: https://stackoverflow.com/questions/37172928/angular-cli-server-how-to-proxy-api-requests-to-another-server*/
const PROXY_CONFIG = [{
  context: ["/api1/*"],
  target: "http://localhost:3000",
  secure: false,
  /* if https , set it `true` else `false` */
  logLevel: "debug",
  changeOrigin: false
  /* if your host target is not the current environment(i.e localhost)
  if it is www.something`, then change it to `true` */
}, {
  context: ["/api2"],
  target: "http://localhost:3001",
  secure: false,
  logLevel: "debug",
  changeOrigin: false
}];
module.exports = PROXY_CONFIG;
