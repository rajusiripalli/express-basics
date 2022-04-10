const model = require('../models/friends.model');

function postfriends  (req, res) {
    if(!req.body.name){
        res.status(400).json({
            error: "Missing Friend Name"
        })
    }
    const newFriend = {
        name: req.body.name,
        id: model.length
    }

    model.push(newFriend);
    res.json(newFriend);
}


function getOneFriend (req, res) {
    const friendId =  Number(req.params.friendId);

    const friend = model[friendId];

    if(friend){
        res.status(200).json(friend);
    }else{
        //res.sendStatus(404);
        res.status(404).json({
            error: "Friend Doesn't exist.."
        })
    }
}


function getFriends (req, res) {
    res.json(model);
}


module.exports ={
    postfriends,
    getOneFriend,
    getFriends
}