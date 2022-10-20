const router = require('express').Router();

const { Drug, SideEffect, UserQuery, User} = require('../models');

router.get('/', async (req, res) => {
  try {

    const drugData = await Drug.findAll({
      include: [
        {
          model: SideEffect,
          attributes: ["drug_id", "ndc"]
        }
      ]
    });

    const drugs = drugData.map((drug) => drug.get({ plain: true }));

    res.render('homepage', {
      drugs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/drugs/:id', async (req, res) => {
  try {
    const drugData = await Drug.findbyPk(req.params.id, {
      include: [{
        model: SideEffect,
        attributes: ["drug_id", "ndc"]
      }]
    });

    const drug = drugData.get({ plain: true });

    res.render('drug', {
      ...drug,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', async (req, res) => {
  try {
    const userData = await User.findbyPk(req.session.user_id, {
      include: [
        {
          model: Drug
        },
        {
          model: UserQuery
        }
    ]
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,

      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
