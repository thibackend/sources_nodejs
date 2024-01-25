const productRoutes = require('./productRoutes')

function Router(app) {
    app.use("/products", productRoutes);
}
module.exports = Router;