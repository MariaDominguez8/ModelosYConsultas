const db = require('../database/models')

const list = async (req, res) => {
  const locals = {
    genres: await db.Genre.findAll()
  }

  res.render('genresList', locals)
}

const detail = async (req, res) => {
  const locals = {
    genre: await db.Genre.findByPk(req.params.id)
  }
  res.render('genresDetail', locals)
}

module.exports = {
  list,
  detail
}