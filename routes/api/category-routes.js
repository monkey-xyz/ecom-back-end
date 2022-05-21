const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  try {
    const categoriesData = await Category.findAll({
      include: [{ model: Product}],
    });
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  try {
    const categoriesData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  try {
    const categoriesData = await Category.create(req.body);
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
  try {
    const categoriesData = await Category.update({
      category_name: req.body,
      where: {
        id: req.params.id
      }
    })
    
    res.status(200).json(categoriesData);
  } catch (err) {
  res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  try {
  const categoriesData = await Category.destroy({
    where: {
      id: req.params.id
    }
  });

  if (!categoriesData) {
    res.status(4043).json({message: 'There is no category associated with this id.'});
    return;
  }

  res.status(200).json(categoriesData);
  } catch (err) {
  res.status(500).json(err);
  }
});

module.exports = router;
