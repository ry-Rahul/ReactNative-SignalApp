import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

const register = async (req, res) => {
  const {name, email, password, image} = req.body;
  console.log(name, email, password, image);

  if (!name || !email || !password) {
    return res.status(422).json({error: 'Please fill all the fields'});
  }

  const newUser = new User({
    name,
    email,
    password,
    image,
  });

  await newUser
    .save()
    .then(user => {
      res
        .status(200)
        .json({message: 'User registered successfully', user: user});
    })
    .catch(err => {
      console.log('Error in registering user');
      res.status(500).json({error: err});
    });
};

const login = async (req, res) => {
  try {
    const {email, password} = req.body;

    if (!email || !password) {
      return res.status(422).json({error: 'Please fill all the fields'});
    }

    const user = await User.findOne({email: email});
    if (!user) {
      return res.status(400).json({error: 'Invalid email or password'});
    }
    if (user.password !== password) {
      return res.status(400).json({error: 'Invalid email or password'});
    }

    const secretKey = '08cq8GpSroLVXfFJOKMTgpg1LckJ4m5GCAOhOWkJI2c=';
    const token = jwt.sign({userId: user._id}, secretKey);

    res
      .status(200)
      .json({message: 'User logged in successfully', token: token});
      
  } catch (err) {
    console.log('Error in Login');
    res.status(500).json({error: err});
  }
};

export {register, login};
