const router = require('express').Router();
const { UserQuery } = require('../../models');


//get


router.post('/', async (req, res) => {
  try {
    const newUserQuery = await UserQuery.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newUserQuery);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/userQuery/:id', async (req, res) => {
  try {
    const UserQueryData = await UserQuery.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
        drug_id: req.session.drug_id,
      },
    });

    if (!UserQueryData) {
      res.status(404).json({ message: 'No history found with this id!' });
      return;
    }

    res.status(200).json(UserQueryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
