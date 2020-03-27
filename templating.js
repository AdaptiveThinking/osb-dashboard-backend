var fs = require('fs');

const hrefRegex = /\bth:(href=)("\$\{([a-zA-Z0-9]+)\}")/g;
const inlineRegex = /(\[\[\$\{(\s?([a-zA-Z0-9]+)\s?)\}\]\])/g;

module.exports = {
    TemplateEngine: function(filePath, options, callback) {
    fs.readFile(filePath, function (err, content) {
      if (err) return callback(err)
      var rendered = content.toString();
      var match;

      //th:href replacement
      while(match = hrefRegex.exec(rendered)){
        rendered = rendered.replace(match[0], match[1] + '"' + options[match[3]] + '"');
      }
      
      //th:inline replacement
      while(match = inlineRegex.exec(rendered)){
        rendered = rendered.replace(match[0], '"' + options[match[3]] + '"');
      }

      //replace thymeleaf notation
      const thJavaScript = /(<script.*( th:inline="javascript")>)/g;
      while(match = thJavaScript.exec(rendered)){
        rendered = rendered.replace(match[2], "");
      }

      return callback(null, rendered)
    })
  }
}