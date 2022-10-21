const router = require('express').Router();
const { SideEffect } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newSideEffect = await SideEffect.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newSideEffect);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/sideEffect/:id', async (req, res) => {
  try {
    const SideEffectData = await SideEffect.destroy({
      where: {
        id: req.params.id,
        drug_id: req.params.drug_id,
        user_id: req.session.user_id,
      },
    });

    if (!SideEffectData) {
      res.status(404).json({ message: 'No side effect found with this id!' });
      return;
    }

    res.status(200).json(drugsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
