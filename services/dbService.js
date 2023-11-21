const { brands } = require('../models');

const create_brands = (payload) => {
    return brands.create(payload);
}

const fetch_brands = () => {
    return brands.findAll();
}

module.exports = {
    create_brands,
    fetch_brands,
}