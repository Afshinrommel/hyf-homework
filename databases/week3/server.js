let express = require('express');
let app = express();
const mysql = require('mysql');
//const prompts = require('prompts');
var prompt = require('prompt');
let port = process.env.PORT || 2000;
var bookRouter = express.Router();
let parser = require('body-parser');
app.use(parser.urlencoded({
    extended: false
}));
app.use(parser.json());
app.use(express.static('public'));
let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'bntu2012'
    //    database : 'HWUser'
});
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql Connected...')
});
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('template')
    console.log('user accessing Home page');
});

bookRouter.route('/user/db').get((req, res) => {

    var sql = 'CREATE DATABASE if not exists HWUser';
    db.query(sql, (err, result) => {
        if (err) throw err;
        if (err) {
            console.log(err)
        }
        console.log(result);
        //     res.send('database created...')
    });
    var sql = 'use HWUser';
    db.query(sql, (err, result) => {
        if (err) throw err;
        if (err) {
            console.log(err)
        }
        console.log(result);
    });
    var sql = 'create table if not exists userid(userid int AUTO_INCREMENT,username VARCHAR(255),phone int(255),email VARCHAR(255),password VARCHAR(255), PRIMARY KEY (userid))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        //   res.send('userid table created....');
    })

    var sql = 'create table if not exists podcast(userid int AUTO_INCREMENT,content VARCHAR(255),title VARCHAR(255),year int(255), PRIMARY KEY (userid))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);

    })

});
app.use('/', bookRouter);
bookRouter.route('/user/add').post((req, res) => {
    var sql = 'use HWUser';
    db.query(sql, (err, result) => {
        if (err) throw err;
        if (err) {
            console.log(err)
        }
        console.log(result);
    });

    let newUser = {
        userid: req.body.userid,
        username: req.body.username,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password
    };
    var sql = 'INSERT INTO userid SET ?';
    let query = db.query(sql, newUser, (err, result) => {
        if (err) throw err;
        if (err) {
            console.log(err)
        }
        res.send(result);
    });
});
bookRouter.route('/podcast/add').post((req, res) => {
    var sql = 'use HWUser';
    db.query(sql, (err, result) => {
        if (err) throw err;
        if (err) {
            console.log(err)
        }
        console.log(result);
    });

    let newPodcast = {
        userid: req.body.userid,
        title: req.body.title,
        content: req.body.content,
        year: req.body.year
    };
    var sql = 'INSERT INTO podcast SET ?';
    let query = db.query(sql, newPodcast, (err, result) => {
        res.send('post 1 added');
    });
});
bookRouter.route("/users/userid").post((req, res) => {
    var sql = 'use HWUser';
    db.query(sql, (err, result) => {
        if (err) throw err;
        if (err) {
            console.log(err)
        }
    });
    console.log(req.body.userid);
    let user = {
        userid: req.body.userid
    };
    //  var sql = `select * from posts where userid = ${req.params.id}`;
    var sql = `select * from userid where userid = ${user.userid}`;
    let query = db.query(sql, (err, results) => {
        if (err) throw err;

        res.send(results);
    });
});
bookRouter.route('/users').get((req, res) => {
    var sql = 'use HWUser';
    db.query(sql, (err, result) => {
        if (err) throw err;
        if (err) {
            console.log(err)
        }
    });
    var sql = "select * from userid";
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        //  res.send('userid fetched...');
        res.send(results);
    });
});
app.post("/updateuser", (req, res) => {
    var sql = 'use HWUser';
    db.query(sql, (err, result) => {
        if (err) throw err;
        if (err) {
            console.log(err)
        }
    });
    var sql = "UPDATE userid SET userid='" + req.body.userid + "', username='" + req.body.username + "', phone='" + req.body.phone + "',email='" + req.body.email + "',password='" + req.body.password + "'WHERE userid=" + req.body.userid;
    db.query(sql, (err, result) => {
        if (err) throw err;
        if (err) {
            console.log(err)
        }
        res.send(result);
    });
})
app.post("/updatepodcast", (req, res) => {
    var sql = 'use HWUser';
    db.query(sql, (err, result) => {
        if (err) throw err;
        if (err) {
            console.log(err)
        }
    });
    var sql = "UPDATE podcast SET userid='" + req.body.userid + "', content='" + req.body.content + "', title='" + req.body.title + "',year='" + req.body.year + "'WHERE userid=" + req.body.userid;
    db.query(sql, (err, result) => {
        if (err) throw err;
        if (err) {
            console.log(err)
        }
        res.send(result);
    });
})
app.post("/deleteuser", (req, res) => {
    var sql = 'use HWUser';
    db.query(sql, (err, result) => {
        if (err) throw err;
        if (err) {
            console.log(err)
        }
    });
    let a = req.body.userid;
    console.log(a);
    let b = a[0];
    var sql = "DELETE FROM userid WHERE userid=" + b + "";
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
})
app.post("/deletepodcast", (req, res) => {
    var sql = 'use HWUser';
    db.query(sql, (err, result) => {
        if (err) throw err;
        if (err) {
            console.log(err)
        }
    });
    let a = req.body.userid;
    console.log(a);
    let b = a[0];
    var sql = "DELETE FROM podcast WHERE userid=" + b + "";
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
})
app.listen(port, (err) => {
    console.log('running server on port' + port);
});

 