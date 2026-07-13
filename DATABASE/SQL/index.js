const { faker } = require("@faker-js/faker"); // requiring the faker package to generate fake data
const mysql = require("mysql2"); // requiring the mysql package to connect backend with database

const express = require("express");
const app = express();
const port = 8080;

const { v4: uuidv4 } = require("uuid");

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: true }));

// connecting the server with database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "Ayan@2005",
});
/*
// giving some commands to database to execute

let q = "SHOW TABLES";

try {
  connection.query(q, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
} catch (err) {
  console.log(err);
}
*/
// insering new data in tables in db
/*
let qr = "insert into user (id, username, email, password) values ?";
let users = [
  ["123", "123_newuser", "abc@gmail.com", "abc"],
  ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
  ["123c", "123_newuserc", "abc@gmail.comc", "abcc"],
];

try {
  connection.query(qr, [users], (err, result) => {
    if (err) throw err;
    console.log(result);
  });
} catch (err) {
  console.log(err);
}
*/
// generating fake datas using faker package

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

/*
// inserting 100 fake users data in table using faker

let qry = "insert into user (id, username, email, password) values ?";
let data = [];

for (let i = 1; i <= 100; i++) {
  data.push(getRandomUser()); // 100 fake users array
}
*/
/*
try {
  connection.query(qry, [data], (err, result) => {
    if (err) throw err;
    console.log(result);
  });
} catch (err) {
  console.log(err);
}

connection.end(); // ending the connection with database
*/

// home route
app.get("/", (req, res) => {
  let q = "SELECT count(*) FROM user";
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in db");
  }
});

// show users route
app.get("/user", (req, res) => {
  let q = "SELECT * FROM user";
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let users = result;
      res.render("showusers.ejs", { users });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

// add new users
app.get("/user/add", (req, res) => {
  res.render("newuser.ejs");
});

app.post("/user", (req, res) => {
  let newid = uuidv4();
  let {
    username: newusername,
    email: newemail,
    password: newpassword,
  } = req.body;
  let q = `INSERT INTO user (id, username, email, password) VALUES ("${newid}", "${newusername}", "${newemail}", "${newpassword}")`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      res.redirect("/user");
    });
  } catch (err) {
    console.log(err);
    res.send("some error in DB");
  }
});

// edit users route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE ID = "${id}"`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let targetuser = result[0];
      res.render("edit.ejs", { targetuser });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in db");
  }
});

// update username route
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;
  let q = `SELECT * FROM user WHERE ID = "${id}"`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let targetuser = result[0];
      if (formPass != targetuser.password) {
        res.send("Wrong Password");
      } else {
        let q2 = `UPDATE user SET username = "${newUsername}" WHERE id = "${id}"`;

        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("some error in db");
  }
});

// delete user route
app.get("/user/:id/delete", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE ID = "${id}"`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let targetuser = result[0];
      res.render("delete.ejs", { targetuser });
    });
  } catch (err) {
    console.log(err);
    res.send("some error in db");
  }
});

app.delete("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass } = req.body;
  let q = `SELECT * FROM user WHERE ID = "${id}"`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let targetuser = result[0];
      if (formPass != targetuser.password) {
        res.send("Wrong Password");
      } else {
        let q2 = `DELETE FROM user WHERE id = "${id}"`;

        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("some error in db");
  }
});

// listening to server port
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
