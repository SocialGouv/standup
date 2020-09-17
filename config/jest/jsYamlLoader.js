module.exports = {
  getCacheKey() {
    return "js-yaml-loader"
  },
  process() {
    return "module.exports = {};"
  },
}
