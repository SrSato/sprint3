var fs = require('fs');

const lea=()=>{

	fs.readFile('n1e2_log.txt', 'utf8', function (err, data) {
	  if (err) throw err;
	  console.log('Leyendo... \n');
	  console.log(data);
	  console.log('\nLeido el total del fichero');
	}); 

}

lea();