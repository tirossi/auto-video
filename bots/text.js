var algorithmia = require('algorithmia')

function bots(content) {

  fetchContentFromWiki(content)
  //cleanContent(content)	
  //breakIntoSentences(content)
	
  async function fetchContentFromWiki(content) {

    var algorithmiaKey = algorithmia('simYfE5q4TzpWVBx7ZtlyJB35OZ1')
    var wikipediaParser = algorithmiaKey.algo('web/WikipediaParser/0.1.2')
    var wikipediaResponse = await wikipediaParser.pipe(content.searchTerm)
    var wikipediaContent = wikipediaResponse.get()
    console.log(wikipediaContent)	  

  }

}

module.exports = bots
