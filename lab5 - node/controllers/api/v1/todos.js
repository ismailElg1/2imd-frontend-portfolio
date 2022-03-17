const Todo = require('../../../models/Todo');

const getAll = (req, res) => {
    Todo.find({"user": req.user._id}, (err, doc) => {
        if(!err){
            res.json({
                "status": "success",
                "data": {
                    "todos": doc
                }
            });
        }
    });
}

const create =  (req, res, next) => {
    
    let todo = new Todo();
    todo.text = req.body.text;
    console.log(req.user);
    todo.user = req.user._id;
    todo.completed = false;
    todo.save((err, doc) => {
        if(err){
            res.json({
                "status": "error",
                "message": "Could not save this to do item",
            })
        }
        if(!err){
            res.json({
                "status": "success",
                "data":{
                    "todo": doc
                }
            });
        }
    });

}

module.exports.getAll = getAll;
module.exports.create = create;

