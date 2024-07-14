import express from 'express';
import User from '../models/User';

const getAllUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.find({_id: {$ne: userId}});

    res.status(200).json(user);
  } catch (error) {
    console.log('Error in getting all user');
    res.status(500).json({error: error});
  }
};

const sendRequest = async (req, res) => {
  try {
    const {senderId, receiverId, message} = req.body;
    const reciever = await User.findById(receiverId);
    if (!reciever) {
      return res.status(404).json({error: 'User not found'});
    }

    reciever.requests.push({from: senderId, message: message});
    await reciever.save();
    res.status(200).json({message: 'Request sent successfully'});
  } catch (error) {
    console.log('Error in sending request');
    res.status(500).json({error: error});
  }
};


export {getAllUser, sendRequest};