var input = require('readline-sync')
var bot = {

  text: require('./bots/text.js')

}

function start() {

  var content = {}

  content.searchTerm = {
    
    "articleName": inputSearchTerm(),
    "lang": "pt"	  

  }
		
  content.searchIndex = inputSearchIndex()

  bot.text(content)	

  function inputSearchTerm() {

    return input.question('Digite o termo de busca: ')

  }

  function inputSearchIndex() {

    themes = ['Quem é/foi', 'Oque é', 'A histoŕia por trás de']

    themeIndex = input.keyInSelect(themes, 'Selecione o tema: ')
    themeText = themes[themeIndex]
    return themeText	  

  }

  console.log(content)

}

start()
