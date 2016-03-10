var express = require('express')
	, router = express.Router()
 	;

/*
router.get('/data', function(req, res) {
	console.log("******************");
	console.log("AUTHORIZATION Headers: ", req.headers['authorization']);
	console.log("Accept Headers: ", req.headers['accept']);
	console.log("HEADERS: ", req.headers);
	console.log("******************");
	var data = ['1', '2', '3', '4', '5'];
	res.json(data);
});
*/

router.get('/demands', function(req, res) {
	var data = [
        {
          visibility: 'true',
          parentCategory: 'Clothes',
          category: 'Shirt',
          date: '15.02.2016',
          gender: ['Men', 'Women'],
          size: ['L'],
          quality: ['Used', 'New'],
          quantity: '40',
          img: '../assets/images/trousers.png',
          askedBy: {
            name: 'NGO name',
            address: 'Mitte MollStrasse 112. Berlin',
            'openingHours': [{
              'day': 'Monday',
              'time': '09 - 12'
            }],
            phone: '',
            description: ''
          }
        },
        {
          visibility: 'true',
          parentCategory: 'Footwear',
          category: 'Pants',
          date: '15.02.2016',
          gender: ['Men', 'Women'],
          size: ['L'],
          quality: ['Used', 'New'],
          quantity: '40',
          img: '../assets/images/socks.png',
          askedBy: {
            name: 'NGO name',
            address: 'Mitte MollStrasse 112. Berlin',
            'openingHours': [{
              'day': 'Monday',
              'time': '09 - 12'
            }],
            phone: '',
            description: ''
          }
        },
        {
          visibility: 'true',
          parentCategory: 'Hygiene',
          category: 'Shampoo',
          date: '15.02.2016',
          gender: ['Men', 'Women'],
          size: ['L'],
          quality: ['Used', 'New'],
          quantity: '40',
          img: '../assets/images/trousers.png',
          askedBy: {
            name: 'NGO name',
            address: 'Mitte MollStrasse 112. Berlin',
            'openingHours': [{
              'day': 'Monday',
              'time': '09 - 12'
            }],
            phone: '',
            description: ''
          }
        }
    ];
    res.json(data);
});

module.exports = router;

