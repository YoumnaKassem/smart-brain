const express = require('express');
const fs=require('fs');

var bodyParser = require('body-parser')
const app = express();
console.log('starting our program');
fs.writeFile('mynewfile.txt', 'hi world i will be domeone specials', err=>{
	err?(console.log('the error is', err)):console.log('no error');
});

const analyzeParenthis=data=>{
	console.time('processingTime')
	let up=0;
	let down=0;
	for (let c of data){
		c=='('? up++ : down++;
	}
	if(up-down==0){console.log('level 0');}
	else if (up>down){
		console.log('level is upper in the', up-down);
	}
	else
		console.log('level is lower at the ', down-up);
	console.timeEnd('processingTime');
}

fs.readFile('./koos.txt', (err,data)=>{
	err?console.log('err', err):analyzeParenthis(data.toString());
	
});






// app.get('/d',(req,res)=>{

// 	res.send("hi i can do it");
// 	console.log('heheheeheh');


// })

// app.use(bodyParser.json())
// app.get('/t/:id',(req, res)=>{

// 	console.log(req.query);
// 	res.send(req.query);
// 	console.log(req.params);
// })


// app.post('/books',(req, res)=>{
	
// 	console.log(req.body);
// 	res.send("success");
// });
// app.listen(3000);