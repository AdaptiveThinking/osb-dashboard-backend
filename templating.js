var fs = require('fs')

module.exports = {
    templateEngine: function(filePath, options, callback) {
    fs.readFile(filePath, function (err, content) {
      if (err) return callback(err)
      var rendered = content.toString()
        .replace(' th:inline="javascript"', "")
        .replace('th:href="${baseHref}"', 'href=' + options.baseHref)
        .replace('[[${ serviceInstanceId }]]', '\"' + options.serviceInstanceId + '\"')
        .replace('[[${ token }]]', '\"' + options.token + '\"')
        .replace('[[${ endpointUrl }]]', '\"' + options.endpointUrl+ '\"' )
        .replace('[[${ customEndpoints }]]', options.customEndpoints)
  
      return callback(null, rendered)
    })
  }
}