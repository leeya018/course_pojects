$(document).ready(function () {


	var products = [
		{

			// selector: ".storeContainer",

			selector: ".recent",
			items: [
				{
					"photo": "https://robohash.org/omnisaliaspraesentium.bmp?size=200x150&set=set1",
					"title": "Wine - Rhine Riesling Wolf Blass",
					"price": "235.49",
					"sku": 1
				},
				{
					"photo": "https://robohash.org/veritatisinaut.jpg?size=200x150&set=set1",
					"title": "Bread - Mini Hamburger Bun",
					"price": "192.91",
					"sku": 2
				},
				{
					"photo": "https://robohash.org/molestiasminimareiciendis.png?size=200x150&set=set1",
					"title": "Beans - Soya Bean",
					"price": "105.57",
					"sku": 3
				},
				{
					"photo": "https://robohash.org/etoditvitae.bmp?size=200x150&set=set1",
					"title": "Fish - Halibut, Cold Smoked",
					"price": "182.49",
					"sku": 4
				},
				{
					"photo": "https://robohash.org/quiverorerum.bmp?size=200x150&set=set1",
					"title": "Lamb - Loin, Trimmed, Boneless",
					"price": "193.48",
					"sku": 5

				}
			]
		},
		{
			selector: ".favorites",
			items: [
				{
					"photo": "https://robohash.org/occaecatisintaut.bmp?size=200x150&set=set1",
					"title": "Beef - Chuck, Boneless",
					"price": "483.18",
					"sku": 6
				},
				{
					"photo": "https://robohash.org/nihilenimsed.bmp?size=200x150&set=set1",
					"title": "Wine - Jaboulet Cotes Du Rhone",
					"price": "43.57",
					"sku": 7
				},
				{
					"photo": "https://robohash.org/asperioresquisquamquis.png?size=200x150&set=set1",
					"title": "Scrubbie - Scotchbrite Hand Pad",
					"price": "231.79",
					"sku": 8
				},
				{
					"photo": "https://robohash.org/istenamofficiis.bmp?size=200x150&set=set1",
					"title": "Pepper - Yellow Bell",
					"price": "30.35",
					"sku": 9
				},
				{
					"photo": "https://robohash.org/molestiaesedenim.png?size=200x150&set=set1",
					"title": "Trueblue - Blueberry",
					"price": "400.09",
					"sku": 10

				}
			]
		}
	];
	var options = {
		products: products
	}

	var cartSelector = '.cartContainer';
	$('.allStore').Shop(cartSelector, options);


});