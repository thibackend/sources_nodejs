
const getListProduct = (req, res, next) => {
    try {
        res.status(200).json({ message: "hello there!" });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getListProduct,
};