const router = require('express').Router();

const { Drug, SideEffect, UserQuery, User} = require('../models');

router.get('/', async (req, res) => {
  try {
    let drugData;
    if (req.query.q) {
        drugData = await Drug.findAll({
            where: {
                product_name: req.query.q,
            },
          include: [
            {
              model: SideEffect,
              attributes: ["drug_id", "ndc", "warnings"]
            }
          ]
        });
    } else {
        drugData = await Drug.findAll({
          include: [
            {
              model: SideEffect,
              attributes: ["drug_id", "ndc", "warnings"]
            }
          ]
        });
    }

    

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
    const drugData = await Drug.findByPk(req.params.id, {
      where: {
        product_name: req.query.q,
      },
      include: [{
        model: SideEffect,
        attributes: ["drug_id", "ndc","warnings"]
      }],
    });

    const drugs = drugData.get({ plain: true });

    res.render('drugs', {
      ...drugs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      include: [
        // {
        //   model: Drug

        // },
        // {
        //   model: UserQuery
        // }
    ]
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,

      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
