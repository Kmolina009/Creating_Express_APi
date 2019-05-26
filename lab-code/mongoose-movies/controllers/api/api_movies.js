var Movie = require("/Users/gastudent/code/Creating_Express_Api/lab-code/mongoose-movies/models/movie.js");

module.exports = {
    index,
    show,
    create,
    update,
    remove
}


function index(req, res){
    Movie.findAll({})
    .then(movies => {
        res.status(200).json(movies)

    })
    .catch(err => {
        res.status(400).json({"error": "OH NO! Something went wrong"})
    });
}; 

function show(req, res){
    Movie.findById(req.params.id)
    .populate('cast').exec((err, movie ) => {
        if(err)return res.status(400).json({"error": "OH NO! Something went wrong"});
        res.status(200).json(movie);
    });
    }

    //async await, a form of "syntatic sugar"
async function create (req, res) {
    try{
        const newMovie = await Movie.create(req.body);
        res.status(201).json(newMovie);
    }catch(err){
        res.status(400).json({"error": "OH NO! Something went wrong"});
    }
}

async function update(req, res){
    try{
const updateMovies  = await Movie
    .findByIdAndUpdate(req.params.id. req.body, { new: true });
    res.status(200).json(updateMovies);
    }
    catch(error) {
        res.status(500).json({"error": "OH NO! Something went wrong"});
    }
    
}
async function remove (req, res){
    try{
    await Movies
    .findByIdandDelete(req.params.id)
    res.status(200).json({removeMovie});
    }
catch(error) {
    res.status(500).json({"error":"OH NO! Something when wrong!"});
    }
}