const checkExist = (Model) => async (req, res, next) => {
  try {
    const { id } = req.params;

    const foundItem = await Model.findOne({
      where: {
        id,
      },
    });

    if (foundItem) {
      next();
    } else {
      res.status(404).send("Not Found");
    }
  } catch (err) {
    res.status(500).send({
      status: "err",
      message: "Check exist middleware is working wrong!",
    });
  }
};

module.exports = { checkExist };
