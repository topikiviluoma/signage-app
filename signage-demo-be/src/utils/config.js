let port = process.env.BE_PORT
let mongoUrl = process.env.SIG_MONGODB_URI

module.exports = {
  mongoUrl,
  port
}
