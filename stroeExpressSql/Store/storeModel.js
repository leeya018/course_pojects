var con = require('./dbConnection.js');


var storeModel = (function (con) {
    function getCategories() {
        //need to return from callback functions
        con.query("SELECT * FROM Categories", function (err, result) {
            return result;
        });

    }
    function getProductsByCategory(categoryID) {
        //need to return from callback functions
        var products = con.query("SELECT * FROM Products WHERE category_id=", categoryID);
        return products;
    }

    return {
        'getCategories': getCategories,
        'getProductsByCategory': getProductsByCategory,
    }
})(con);


//  storeModel.getCategories();
// storeModel.getProductsByCategory(1);


module.exports = storeModel;




