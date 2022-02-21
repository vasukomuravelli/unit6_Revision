module.exports = (PermittedRole) => {
  return function (req, res, next) {
    user = req.user.user;
    islimited = false;
    islimited = user.Role === PermittedRole ? true : false;

    if (!islimited) {
      return res.status(500).json({
        status: "Failed",
        message: "You are not allowed to access",
      });
    }
    return next();
  };
};
