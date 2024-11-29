exports.getAdminData = (req, res) => {
    res.json({ message: 'Welcome Admin! You have full access.' });
  };
  
  exports.getModeratorData = (req, res) => {
    res.json({ message: 'Welcome Moderator! You have limited access.' });
  };
  
  exports.getUserData = (req, res) => {
    res.json({ message: 'Welcome User! You can view your data.' });
  };
  