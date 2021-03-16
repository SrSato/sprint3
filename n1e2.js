var fs = require('fs');

const escriba=()=>{

	fs.writeFile('n1e2_log.txt', 'Mi nombre es Sera y el de la función es escriba', function (err) {
	  if (err) throw err;
	  console.log('Guardado!');
	}); 

}

escriba();