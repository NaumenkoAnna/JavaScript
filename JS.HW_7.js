const jsonData = require('./task2.json')




let unique = jsonData.filter((item, i, arr) => jsonData.findIndex(it => it.name === item.name) == i)
 console.log(unique)