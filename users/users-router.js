const router = require('express').Router();

const Users = require('./users-model.js');

router.get('/', (req, res) => {
	Users.find()
		.then((users) => {
			res.status(200).json(users);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.get('/:id', (req, res) => {
	Users.findById(req.params.id)
		.then((user) => {
			res.status(200).json(user);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

module.exports = router;
