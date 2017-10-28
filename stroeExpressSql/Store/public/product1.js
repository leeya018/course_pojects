// var moduleFunc = require('./moduleFunc.js');

// console.log( 'The area of a circle of radius 4 is '
//            + moduleFunc.area(4));


$.fn.Shop = function (cartSelector, options) {
    var wantedCoin = 'USD';
    var socket;
    var settings = {

        products_load_url: 'http://wpwith.us/experis/cart-products-ajax.php',
        url_load_page_count: 12,
        paypal: {
            currency_code: "EUR",
            image_url: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Logo_Lee_Cooper.jpg',
            lc: 'en_US',
            business: 'The PayPal account email. MUST BE FILLED.'
        }
    }

    // var settings = {

    // 	products_load_url: null,
    // 	url_load_page_count: null,
    // 	paypal: {
    // 		currency_code: "EUR",
    // 		image_url: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Logo_Lee_Cooper.jpg',
    // 		lc: 'en_US',
    // 		business: 'The PayPal account email. MUST BE FILLED.'
    // 	}
    // }
    $.extend(settings, options);


    var storeSelector = this;

    var cart = (function (cartSelector) {
        $(cartSelector).addClass('scrollClass');

        function createTableHtml() {
            $(window).scroll(function () {//scroll


                // if ($(window).scrollTop() >= 0 && $(window).scrollTop() < 17) {
                // 	$('.cartContainer').addClass('topClass');
                // }
                // else {
                // 	$('.cartContainer').removeClass('topClass');
                // }
                ///new scroll event and put it to cart




                // if ($(document).scrollTop() > 140 && $(document).width() > 880) {
                // $(cartSelector).addClass('scrollClass');
                // } else {
                // $(cartSelector).removeClass('scrollClass');
                // }
                //
                console.log($(document).width());
                if ($(document).width() > 480) {

                    $(cartSelector).addClass('scrollClass');
                }
                console.log($(window).scrollTop() + $(window).height())

            });

            function addScrollEvent() {

                // $('.cartContainer').addClass('topClass');


            }
            function openPayPalPage(myPayPlalBtn) {
                myPayPlalBtn.click(function () {
                    function sendDataCartToServer(dataArr) {
                        var strProds = '';
                        for (var i = 0; i < dataArr.length; i++) {
                            strProds += JSON.stringify(dataArr[i]);
                        }
                        var randNum = Math.floor(Math.random() * 10000);
                        var dataSend = { 'randNum': randNum, 'strProds': strProds };





                        $.ajax({
                            url: '/cartData',
                            type: 'POST',
                            dataType: 'json',
                            crossDomain: true,
                            cache: false,
                            async: false,
                            data: { data: dataSend },
                            success: function (data1) {
                                if (data1.error !== 'OK') {
                                    console.log('Succeed');
                                }
                            }
                        });
                    }
                    function handleDataIntoForm() {
                        // var names = ['cmd', 'upload', 'business', 'currency_code', 'lc', 'image_url'];
                        var formDiv = $('<div>').html('<form action="https://www.paypal.com/cgi-bin/webscr" method="post">' +
                            '<input type="hidden" name="cmd" value="_cart">' +
                            '<input type="hidden" name="upload" value="1">' +
                            '<input type="hidden" name="business" value="ronny@hoojima.com">' +
                            '<input type="submit" value="PayPal" hidden>' +
                            '</form>');
                        var inputCurrency_code = $('<input>', { type: 'hidden', name: 'currency_code', value: settings.paypal.currency_code });
                        var inputCurrency_image_url = $('<input>', { type: 'hidden', name: 'image_url', value: settings.paypal.image_url });

                        storeSelector.append(formDiv);

                        storeSelector.find('form').append(inputCurrency_code, inputCurrency_image_url);

                        var form = storeSelector.find('form');
                        var len = $(cartSelector).find('tbody tr').length;
                        var dataArr = [];
                        for (var i = 0; i < len - 1; i++) {
                            var data = storeSelector.find('table tbody tr:nth-child(' + (i + 1) + ')').data();
                            dataArr.push(data);
                            var inputName = $('<input>', { type: 'hidden', name: 'item_name_' + (i + 1), value: data.title });
                            var inputPrice = $('<input>', { type: 'hidden', name: 'amount_' + (i + 1), value: data.price });
                            var inputQty = $('<input>', { type: 'hidden', name: 'quantity_' + (i + 1), value: data.qty });
                            form.append(inputName, inputPrice, inputQty);

                        }
                        sendDataCartToServer(dataArr);

                    }
                    handleDataIntoForm();
                    var payPalBtn = storeSelector.find('input[type=submit]')[0];
                    payPalBtn.click();
                });
            }
            function createCoinConvertBtns() {
                function addConvertAction(coinBtn) {

                    function changeTextInTrs(trs, coin, textCoin, formerCoinRate) {
                        var coinSigns = { 'ILS': 'I', 'USD': '$', 'EUR': 'E' };
                        var sign = coinSigns[textCoin];
                        for (var i = 0; i < trs.length; i++) {
                            var amount = parseFloat(trs[i].textContent.substring(0, trs[i].textContent.length - 1))
                            amount = amount / formerCoinRate * coin;
                            trs[i].textContent = amount.toFixed(2) + sign;

                        }

                    }

                    coinBtn.click(function () {
                        var coinBtn = this;
                        wantedCoin = this.textContent;
                        function convertCoinInTable(coin, formerCoinRate) {
                            var trsPrice = $('table').find('.price');
                            var trsTotal = $('table').find('.total');
                            changeTextInTrs(trsPrice, coin, coinBtn.textContent, formerCoinRate);
                            changeTextInTrs(trsTotal, coin, coinBtn.textContent, formerCoinRate);

                        }
                        var dataCoin;
                        var textC = this.textContent;

                        $.ajax({
                            url: "http://api.fixer.io/latest?base=USD",
                            beforeSend: function () {
                                console.log("beforeSend");
                            },
                            complete: function () {
                                console.log("complete");
                            },
                            success: function (data) {
                                console.log("success");
                                console.log(data);
                                dataCoin = data;
                                var trText = $('table').find('.total')[0].textContent;;
                                var coinSigns = { 'ILS': 'I', 'USD': '$', 'EUR': 'E' };
                                var formerSign = trText[trText.length - 1];
                                var formerCoin;
                                for (key in coinSigns) {
                                    if (coinSigns[key] == formerSign) {
                                        formerCoin = key;
                                    }


                                }
                                var formerCoinRate = dataCoin.rates[formerCoin] || 1;
                                var coin = dataCoin.rates[textC] || 1;
                                convertCoinInTable(coin, formerCoinRate);
                            }
                        });

                    });
                }
                var arrBttsName = ['ILS', 'USD', 'EUR'];
                var coinBtnDiv = $('<div>', { class: 'coinBtnDiv' });
                for (var i = 0; i < arrBttsName.length; i++) {
                    var coinBtn = $('<button>', { class: arrBttsName[i], text: arrBttsName[i] });
                    addConvertAction(coinBtn);
                    coinBtnDiv.append(coinBtn);
                }
                return coinBtnDiv;
            }

            var cartUrl = "https://www.ci.garden-grove.ca.us/city-files/u28/empty_shopping_cart.jpg";
            var cartImg = $('<img>', { class: 'cartImg' }).css('background-image', 'url(' + cartUrl + ')');
            var thCart = $('<th>', { colspan: 4 }).append(cartImg);
            var trCart = $('<tr>').append(thCart);

            var thPhoto = $('<th>', { text: 'Photo' });
            var thProduct = $('<th>', { text: 'Product' });
            var thQty = $('<th>', { text: 'Qty' });
            var thPrice = $('<th>', { text: 'Price' });
            var thTotal = $('<th>', { text: 'Total' });
            var trHeads = $('<tr>').append(thPhoto, thProduct, thQty, thPrice, thTotal);

            var tHead = $('<thead>').append(trCart, trHeads);

            var td0 = $('<td>', { text: '' });
            var td1 = $('<td>', { text: 'Total' });
            var td2 = $('<td>', { text: '0', class: 'qty' });
            var td3 = $('<td>', { text: '' });
            var td4 = $('<td>', { text: '0$', class: 'total' });
            var trBody = $('<tr>').append(td0, td1, td2, td3, td4);

            var tbody = $('<tbody>').append(trBody);

            var table = $('<table>').append(tHead, tbody);
            var divButs = createCoinConvertBtns();
            $(cartSelector).append(divButs);
            $(cartSelector).append(table);

            var payPlalBtn = $('<img>', { src: 'img/paypalBtn.png', width: '300px', height: '100px' });
            payPlalBtn.attr('target', '_blank');

            openPayPalPage(payPlalBtn);
            $(cartSelector).append(payPlalBtn);


            addScrollEvent();
        }

        function updateCartTotal() {
            var coinSigns = { 'ILS': 'I', 'USD': '$', 'EUR': 'E' };
            //
            var qtyTotal = 0;
            var sumTotal = 0;
            var price;
            var trs = $(cartSelector).find('table tbody tr');
            var len = trs.length - 1;
            for (var i = 0; i < len; i++) {
                var qty = parseFloat(storeSelector.find('table tbody tr:nth-child(' + (i + 1) + ')').data().qty);
                qtyTotal += qty;
                price = parseFloat(storeSelector.find('table tbody tr:nth-child(' + (i + 1) + ')').data().price);
                sumTotal += (price * qty);
            }
            $(cartSelector).find('table tbody tr:last-child .qty').text(qtyTotal);

            $.ajax({
                url: 'http://api.fixer.io/latest?base=USD',
                success: function (data) {
                    var dataCoin = data;
                    var newRate = dataCoin.rates[wantedCoin];
                    var newTotal = (newRate || 1) * sumTotal;
                    $(cartSelector).find('table tbody tr:last-child .total').text(newTotal.toFixed(2) + coinSigns[wantedCoin]);
                }
            })

        }
        function addExistingItem(row) {
            row.find('.qty input').val(++row.data().qty);

            var coinSigns = { 'ILS': 'I', 'USD': '$', 'EUR': 'E' };
            var totalWithSign;
            var totalTxt = row.find('.total').text();
            var len = totalTxt.length;
            var totalNoSign = parseFloat(totalTxt.substring(0, len - 1));

            var priceTxt = row.find('.price').text();
            var lenP = priceTxt.length;
            var priceNoSign = parseFloat(priceTxt.substring(0, lenP - 1));

            totalWithSign = (totalNoSign + priceNoSign).toFixed(2) + (coinSigns[wantedCoin] || '$');
            row.find('.total').text(totalWithSign);

        }
        function createNewRow(data) {
            function createRemoveEvent(newRow) {
                newRow.find('.xIcon').click(function () {
                    socket.emit("deleteFromCart", newRow.data().sku);
                    newRow.remove();
                    updateCartTotal();
                });
            }
            function createOnChangeEvent(newRow) {
                newRow.find('input').change(function () {

                    newRow.data().qty = newRow.find('input').val();
                    var qty = newRow.find('.qty input').val();
                    if (qty == 0) {
                        newRow.remove();
                    }
                    var price = parseFloat(newRow.data().price);
                    var total = parseFloat(qty * price);
                    newRow.find('.total').text(total.toFixed(2) + '$');

                    updateCartTotal();
                });
            }
            function calcPriceCoin(price, newRow, wantedCoin) {
                if (wantedCoin == 'USD') {
                    newRow.append($('<td>', { text: price + '$', class: 'price' }));
                    newRow.append($('<td>', { text: price + '$', class: 'total' }));//1*price
                } else {


                    $.ajax({
                        url: "http://api.fixer.io/latest?base=USD",
                        success: function (data) {
                            console.log(data);
                            dataCoin = data;
                            var coinSigns = { 'ILS': 'I', 'USD': '$', 'EUR': 'E' };
                            var newRate = dataCoin.rates[wantedCoin];
                            var newPrice = (price * newRate).toFixed(2) + coinSigns[wantedCoin];
                            newRow.append($('<td>', { text: newPrice, class: 'price' }));
                            newRow.append($('<td>', { text: newPrice, class: 'total' }));//1*price
                        }
                    });
                }
            }
            data.qty = 1;
            var newRow = $('<tr>').data(data);
            var imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Red_X_Freehand.svg/600px-Red_X_Freehand.svg.png';
            var xIcon = $('<div>', { class: 'xIcon' }).css('background-image', 'url(' + imageUrl + ')');//,{src:''}
            var photo = $('<img>', { src: data.photo });
            newRow.append($('<td>', { class: 'photo' }).prepend(xIcon, photo));
            newRow.append($('<td>', { text: data.title, class: 'title' }));
            var inputNumber = $('<input>').attr({ type: 'number', value: 1 });
            newRow.append($('<td>', { class: 'qty' }).append(inputNumber));
            var priceConverted = calcPriceCoin(data.price, newRow, wantedCoin);

            createRemoveEvent(newRow);
            createOnChangeEvent(newRow);

            storeSelector.find('tbody:last-child').prepend(newRow);
        }


        function addItem(data) {
            function findRowForUpdate(data) {
                var len = storeSelector.find('table tbody tr').length;
                for (var i = 0; i < len - 1; i++) {
                    tr = storeSelector.find('table tbody tr:nth-child(' + (i + 1) + ')');
                    if (tr.data().sku == data.sku) {
                        return tr;
                    }
                }
                return null;
            }
            var row = findRowForUpdate(data);
            if (row !== null) {
                addExistingItem(row);
            } else {
                createNewRow(data)
            }
            updateCartTotal();

            // Do all the rest
        }

        function deleteItem() {

        }

        createTableHtml();

        return { addItem: addItem };
    })(cartSelector);

    //move event to cart
        $(window).resize(function () {

            if ($(document).width() <= 880) {
                $(cartSelector).removeClass('scrollClass');
            } else {
                $(cartSelector).addClass('scrollClass');
            }
        });
    var storeContainer1 = $('<div>', { class: 'storeContainer' });



    if (settings.products_load_url == null) {
        for (var i = 0; i < settings.products.length; i++) {
            var product = new ProductList(settings.products[i], settings.products[i].selector, cart);

        }

    } else {
        loadDataUsingAjax();
    }

    function loadDataUsingAjax() {

        categoryIndex = 0;
        startIndex = 1;
        stopIndex = settings.url_load_page_count;
        // for (var i = 0; i < products.length; ++i) {
        function replaceDataKeys(data) {
            function changeProperties(data) {

                Object.defineProperty(data, 'photo', {
                    enumerable: true,
                    configurable: true,
                    writable: true,
                });
                data['photo'] = data['image'];
                delete data['image'];


            }
            for (var i = 0; i < data.length; i++) {
                changeProperties(data[i]);

            }
        }


        ajaxCall();//give me the first 4 items

        function ajaxCall() {


            socket = io.connect();
            socket.emit("getProducts");

            socket.on('products', function (data) {
                var products = data;
                replaceDataKeys(products);
                var product = new ProductList(data, '.last', cart);



            });
        }



        // $(window).scroll(function () {//scroll
        //     if ($(window).scrollTop() + $(window).height() + 15 > $(document).height()) {
        //         if (parseInt(startIndex) < settings.url_load_page_count) {
        //             startIndex = parseInt(startIndex) + settings.url_load_page_count;
        //         } else {
        //             startIndex = parseInt(startIndex) + 4;
        //         }
        //         stopIndex = parseInt(stopIndex) + 4;
        //         startIndex = '' + startIndex;
        //         stopIndex = '' + stopIndex;
        //         ajaxCall();

        //     }
        // });

        $(storeSelector).append(storeContainer1);
        

    }






    function ProductList(items, categorySelector, cart) {
        var categorySelectorNoDot = categorySelector.split('.')[1];
        function createItem(element, itemDiv) {
            var btn = $('<button>');
            btn.data('prod', {
                sku: element.sku,
                title: element.title,
                price: element.price,
                photo: element.photo
            });

            btn.click(function () {
                function sendCartToServer() {
                    var data;
                    var cartArr = [];
                    var len = $(cartSelector).find('table tbody tr').length - 1
                    for (var i = 0; i < len; i++) {
                        data = $(cartSelector).find('table tbody tr:nth-child(' + (i + 1) + ')').data();
                        cartArr.push(data);




                    }
                    socket.emit("deleteCartAndAdd", cartArr);



                }
                function flyToElement(flyer, flyingTo) {
                    var $func = $(this);
                    var divider = 3;
                    var flyerClone = $(flyer).clone();
                    $(flyerClone).css({ position: 'absolute', top: $(flyer).offset().top + "px", left: $(flyer).offset().left + "px", opacity: 1, 'z-index': 1000 });
                    $('body').append($(flyerClone));
                    var gotoX = $(flyingTo).offset().left + ($(flyingTo).width() / 2) - ($(flyer).width() / divider) / 2;
                    var gotoY = $(flyingTo).offset().top + ($(flyingTo).height() / 2) - ($(flyer).height() / divider) / 2;

                    $(flyerClone).animate({
                        opacity: 0.4,
                        left: gotoX,
                        top: gotoY,
                        width: $(flyer).width() / divider,
                        height: $(flyer).height() / divider
                    }, 700,
                        function () {
                            $(flyerClone).remove();
                        });
                }//end fly
                var flyer = $(this).siblings('img');
                var flyingTo = $(cartSelector).find('thead:first-child th');

                flyToElement(flyer, flyingTo);

                cart.addItem($(this).data('prod'));

                sendCartToServer();
            });

            var img = $('<img>', { src: element.photo })[0];
            var h1 = $('<h1>', { text: element.title })[0];
            var span = $('<span>', { text: element.price + '$' })[0];
            itemDiv.append(img, h1, span, btn);

            return itemDiv;

        }

        var categoryDiv = $('<div>', { class: categorySelectorNoDot });
        if (settings.products_load_url == null) {
            items = items.items;

        }
        for (var i = 0; i < items.length; i++) {
            var itemDiv1 = $('<div>');
            var itemDiv = createItem(items[i], itemDiv1);
            categoryDiv.append(itemDiv);

        }
        storeContainer1.append(categoryDiv);
        if (settings.products_load_url == null) {
            $(storeSelector).append(storeContainer1);

        }

    }

}

