const {config} = require('dotenv');

function main()
	{
		config();
		const secreto = process.env.SECRETO_UNO;
		console.log("Funcionando! y el secreto es: "+secreto);
	}

main();