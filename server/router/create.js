const Router = require("express").Router();
Router.get("/price", async(req, res) => {
    let stock = req.query.stock;
    console.log(stock);
    try {
        const stock_price = await yahooStockPrices.getCurrentData(stock);
        console.log(stock_price);
        res.status(200).json(stock_price);
        
    } catch (error) {
        res.status(404).json({message : error.message});
    }
});