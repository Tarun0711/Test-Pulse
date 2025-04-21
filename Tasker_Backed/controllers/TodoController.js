const TodoModel = require('../models/TodoModel');

module.exports.getToDo = async (req, res) => {
    try {
        const toDo = await TodoModel.find();
        res.json(toDo);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch tasks' });
    }
};

module.exports.saveToDo = async (req, res) => {
    try {
        const { text, description } = req.body;
        const newTodo = new TodoModel({ text, description, updatedAt: new Date() });
        const savedTodo = await newTodo.save();
        res.json(savedTodo);
    } catch (error) {
        res.status(500).json({ message: 'Failed to save task' });
    }
};

module.exports.updateToDo = async (req, res) => {
    try {
        const { _id, text, description, completed } = req.body;
        const updatedTodo = await TodoModel.findByIdAndUpdate(_id, { text, description, completed, updatedAt: new Date() }, { new: true });
        res.json(updatedTodo);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update task' });
    }
};

module.exports.deleteToDo = async (req, res) => {
    try {
        const { _id } = req.body;
        await TodoModel.findByIdAndDelete(_id);
        res.json({ message: 'Deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete task' });
    }
};
