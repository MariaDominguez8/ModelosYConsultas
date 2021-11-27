const db = require('../database/models')

const list = async (req, res) => {
  const locals = {
    actors: await db.Actor.findAll()
  }
  
  res.render('actorsList', locals)
}

const detail = async (req, res) => {
  const locals = {
    actor: await db.Actor.findByPk(req.params.id)
  }
  res.render('actorsDetail', locals)
}

module.exports = {
  list,
  detail
}