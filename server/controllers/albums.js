var mongoose = require('mongoose');
var Album = mongoose.model('albums');
console.log("albums controller loaded");

module.exports = {

    // create: function(req, res){
    //     var newWallpost = new Wallposts({text: req.body})
    //         newWallpost._comments = [];
    //         newWallpost._likes = [];
    //         newWallpost.save(function(err){
    //             if(err) res.json(err);
    //             else res.json({success: true});
    //         })
    // },

    // show: function(req, res){
    //     Question.find({}).populate('_comments').exec(function(err, wallpost){
    //         if(err) res.json(err);
    //         else res.json(wallposts);
    //     })
    // },

};