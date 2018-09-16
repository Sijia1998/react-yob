let UserSQL = {
    queryAll: 'SELECT * FROM userlists',
    addUser: 'INSERT INTO userlists(userName,userAge,danceOfchoice,phoneNumber,classesName) values(?,?,?,?,?)',
}
module.exports = UserSQL;