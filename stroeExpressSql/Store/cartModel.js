var con = require('./dbConnection.js');
var invokeQuery = require('./invokeQuery.js');



var cartModel = function (con, invokeQuery) {
    //how to retrun a var ftom a callback function
    function getCartById(cartId) {
        var ret = invokeQuery("SELECT * FROM Cart where cart_id=", cartId);
        console.log(ret);

    }
    function deleteCartByID(cartId) {
        invokeQuery("delete FROM Cart where cart_id=", cartId);
    }
    function addToCart(cartRow) {
        invokeQuery("insert into Cart set ?", cartRow);
    }
    function removeFromCartByProdID(productId, cartId) {
        invokeQuery("delete from Cart where product_id =", productId, " and cart_id=", cartId);
    }
    function deleteCart(cartId) {
        invokeQuery("delete from Cart where cart_id=", cartId);
    }
    function updateQty(newQty, cartId,productId) {
        invokeQuery("update Cart set qty=", newQty, " where cart_id=", cartId," and product_id=",productId);
    }
    return {
        'getCartById': getCartById,
        'deleteCartByID': deleteCartByID,
        'addToCart': addToCart,
        'removeFromCartByProdID': removeFromCartByProdID,
        'deleteCart': deleteCart,
        'updateQty': updateQty
    }
}(con, invokeQuery);

var cartRow = {
    product_id: 9,
    cart_id: 7,
    qty: 8
};

// cartModel.addToCart(cartRow);

// cartModel.deleteCartByID(1);
// cartModel.getCartById(3);//not return from a callback
// cartModel.removeFromCartByProdID(1,1);
// cartModel.deleteCart(3);
cartModel.updateQty(55, 7,9);
module.exports = cartModel;






// };
