import jwt from 'jsonwebtoken'

const authUser = async (req, res, next) => {
  try {
    const token = req.headers['authorization'] || req.headers['token'];

    if (!token) {
      return res.json({ success: false, message: 'Not Authorized Login Again' });
    }

    const token_decode = jwt.decode(token);
    if (!token_decode?.clerkId) {
      return res.json({ success: false, message: 'Invalid Token' });
    }

    req.clerkId = token_decode.clerkId;
    next();
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
