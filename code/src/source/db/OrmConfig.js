/**
 * Created by Administrator on 2016/11/23 0023.
 */
const orm = require("orm");

module.exports = orm.express("mysql://root:@localhost/ask", {
    define: function (db, models, next) {
        models.Member = db.define("member", {
            id: Number,
            login: String,
            pass: String,
            email: String,
            phone: String,
            id_card: String,
            avatar: String,
            name: String,
            surname: String,
            nickname: String,
            gender: [1/*male*/, 2/*female*/]
        });
        next();
    }
});