'use strict';


module.exports = {
    GetAllTodos: GetAllTodos
};

function GetAllTodos(req, res, next){
    res.json([
        {
            todo_id: 0,
            todo: "Get some coffee",
            author: "Sophie",
            createdate: "2017-09-06T13:24:15+00:00",
            duedate: "2017-09-06T15:24:15+00:00",
            completed: false
        }, {
            todo_id: 1,
            todo: "Get a cookie",
            author: "Sophie",
            createdate: "2017-09-06T13:24:15+00:00",
            duedate: "2017-09-06T15:24:15+00:00",
            completed: false
        }
    ]);

}