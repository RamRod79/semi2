const router = require('express').Router();
const { Drug } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newDrugs = await Drug.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newDrugs);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const drugsData = await Drug.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!drugsData) {
      res.status(404).json({ message: 'No drug found with this id!' });
      return;
    }

    res.status(200).json(drugsData);
  } catch (err) {
    res.status(500).json(err);
  }
});
//get route
// router.get('/drugs/:id', async (req, res)=>{

// });
module.exports = router;
