let UserSQL = {
    queryAll: 'SELECT * FROM websites',
    addUser: 'INSERT INTO websites(id,name,url,alexa,country)  VALUES(0,?,?,?,?)',
}
module.exports = UserSQL;