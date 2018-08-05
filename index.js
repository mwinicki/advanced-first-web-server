//program a server
let express = require("express");
let users = require("./state").users

const app = express();

app.get("/users",function(request,response,next){
    response.send(users)
});
app.get("/users/1",function(request,response,next){
    response.send(users[0])
});
app.post("/users",function(request,response,next){
    users.push({stuff:"things"})
    response.send(users[users.length-1]);
});
app.put("/users/1",function(request,response,next){
    users[0].name = "something else";
    response.send(users);
});
app.delete("/users",function(request,response,next){
    users.pop()
    response.send("Deleted");
});

app.listen(2345, (err) => {
    if (err) {
        return console.log("Error", err);
    }

    console.log("Web server is now living in apartment 2345")

});