const expressAsyncHandler = require("express-async-handler");
const Chat = require("../models/chatModel")
const User = require("../models/userModel")

const accessChats = expressAsyncHandler(async (req,res) => {
    const { userId } = req.body;
    
    if (!userId) return res.status(400);
    
    // find one-one chat
    var isChat = await Chat.find({
        isGroupChat: false,
        $and: [
            {users: {$elemMatch: {$eq: req.User.id}}},
            {users: {$elemMatch: {$eq: userId}}}
        ]
    }).populate("users", "-password").populate("latestMessage")

    isChat = await User.populate(isChat, {
        path:'latestMessage.sender',
        select: "username profilePicture"
    })

    if (isChat.length > 0) {
        res.send(isChat[0])
    }
    else {
        var chatData = {
            chatName: "sender",
            isGroupChat: false,
            users: [req.User.id, userId]
        } 
    }
    
    try {
        const createdChat = await Chat.create(chatData)
        const fullChat = await Chat.findOne({_id: createdChat._id}).populate(
            "users", 
            "-password"
        )
        res.status(200).send(fullChat)
        
    } catch (error){
        res.status(400)
        throw new Error(error.message)
    }

})

const fetchChats = expressAsyncHandler(async (req,res) => {
    try {
        Chat.find({users: {$elemMatch: {$eq: req.User.id}}})
            .populate("users", "-password")
            .populate("groupAdmin", "-password")
            .populate("latestMessage")
            .sort({ updatedAt: -1 })
            .then( async (results) => {
                results = await User.populate(results, {
                    path: "latestMessage.sender",
                    select: "username profilePicture"
                })
                res.status(200).send(results)
            })
    } catch (error) {
        res.status(400)
        throw new Error(error.message)
    } 
})

const createGroupChat = expressAsyncHandler(async (req,res) => {
    if (!req.body.users || !req.body.name) {
        return res.status(400).send({message: "Fill missing fields"})
    }

    var users = JSON.parse(req.body.users)

    if (users.length < 2){
        return res.status(400).send({message: "At least 3 people needed to create group chat"})
    }
    users.push(req.User)
    
    try {
        const groupChat = await Chat.create({
            chatName: req.body.name,
            users: users,
            isGroupChat: true,
            groupAdmin: req.User
        })

        const fullGroupChat = await Chat.findOne({ _id: groupChat._id })
            .populate("users", "-password")
            .populate("groupAdmin", "-password")
        
        res.status(200).json(fullGroupChat)

    } catch (error) {
        res.status(400)
        throw new Error(error.message)
    }
})

const renameGroupChat = expressAsyncHandler(async (req,res) => {
    const { chatId, chatName } = req.body;

    const updatedChat = await Chat.findByIdAndUpdate(
        chatId,
        {chatName: chatName},
        {new: true},
    )
        .populate("users", "-password")
        .populate("groupAdmin", "-password")

    if (!updatedChat)
    {
        res.status(400)
        throw new Error("Some error ocurred while renaming chat")
    } else {
        res.json(updatedChat)
    }
})

const addToGroup = expressAsyncHandler(async (req,res) => {
    const { chatId, userId } = req.body;
    
    // check existence of this user in group
    const chat = await Chat.findById(chatId);
    const userExist = chat?.users.includes(userId);
    if (userExist){
        return res.status(400).send({message: "This user already exists in this group."})
    }
    
    const modifiedChat = await Chat.findByIdAndUpdate(
        chatId,
        {
            $push: {users : userId},
        },
        {
            new: true,
        }
    )
        .populate("users", "-password")
        .populate("groupAdmin", "-password")
    if (!modifiedChat) {
        res.status(400)
        throw new Error("Some error happened while adding user to group")   
    } 
    else {
        res.json(modifiedChat)
    }
})

const removeFromGroup = expressAsyncHandler(async (req,res) => {
    const { chatId, userId } = req.body;
    const modifiedChat = await Chat.findByIdAndUpdate(
        chatId,
        {
            $pull: {users : userId},
        },
        {
            new: true,
        }
    )
        .populate("users", "-password")
        .populate("groupAdmin", "-password")
    if (!modifiedChat) {
        res.status(400)
        throw new Error("Some error happened while removing user to group")   
    } 
    else {
        res.json(modifiedChat)
    }
})

module.exports = { accessChats, fetchChats, createGroupChat, renameGroupChat, addToGroup, removeFromGroup}