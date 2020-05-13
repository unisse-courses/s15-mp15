exports.isPrivate = (req, res, next) => {
    // Must be authenticated to go to the next function
    if (req.session.user) {
      return next()
    } else {
      res.redirect('/');
    }
  };
  
  exports.isPublic = (req, res, next) => {
    // If authenticated, go to home page
    if (req.session.user) {
      return res.status(200).render('calendar', {
                      title:  'My Calendar',
                      email: req.session.email,
      })
    } else {
      return next();
    }
  }