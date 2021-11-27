const db = require('../database/models')

const list = async (req, res) => {
    const locals = {
      movies: await db.Movie.findAll()
    }

    res.render('moviesList', locals)
}

const detail = async (req, res) => {
  const locals = {
    movie: await db.Movie.findByPk(req.params.id)
  }
  res.render('moviesDetail', locals)
}

const newest = async (req, res) => {
  const locals = {
    movies: await db.Movie.findAll({
      order: [
        ['release_date', 'DESC']
      ]
    })
  }
  res.render('newestMovies', locals)
}

const recomended = async (req, res) => {
  const locals = {
    movies: await db.Movie.findAll({
      order: [
        ['rating', 'DESC']
      ],
      limit: 5
    })
  }
  res.render('recommendedMovies', locals)
}


module.exports = {
  list,
  detail,
  'new': newest,
  recomended
}