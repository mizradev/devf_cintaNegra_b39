const Authors  = require('../models/Author');

const getAuthors = () => Authors.find({ is_active: true });
const createAuthor = (data) => Authors.create(data);


module.exports = {
    getAuthors,
    createAuthor
};