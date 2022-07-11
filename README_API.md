<h1 align="center">Documentação API CallMind</h1>

<p align="center">
Este é o backend da aplicação API CallMind -> Seu objetivo é fornecer algumas rotas para registro, login e cadastro de pacientes e psicólogos.
</p>
<br/>
<br/>
<h2 align="center">Endpoints</h2>

<p>A presente API tem um total de 6 endpoints.</p>
<p>O url de base desta API é: http://localhost:3001 </p><br/>

<h2 align="center">Rotas de Cadastro e Login</h2><br/>

<p>As rotas a seguir são necessárias para a utilização de todos os demais endpoints envolvidos com a possibilidade de cadastrar/editar os dados de clientes e de psicólogos na aplicação CallMind.</p><br>

<h3>Cadastro:</h3><br/>

<p>Para realização do cadastro de um novo usuário é necessário utilizar o endpoint abaixo:</p>
<p>Método: `POST BASE_URL /register` </p>
<p>Formato da requisição:</p>
<span>{
	"email": "julia@email.com",
    "password": "123456",
    "name": "Julia Albuquerque Correia",
    "type": "paciente", 
    “registration" : "",
    "first_login" : true
}</span><br/><br/>

<p>Formato de resposta - Status 201</p>
<span>{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imp1bGlhQGVtYWlsLmNvbSIsImlhdCI6MTY1NzAzNjE4OCwiZXhwIjoxNjU3MDM5Nzg4LCJzdWIiOiI2In0.mLlQFz9csJ_UhHBNrrHoDrRKo_JWQbcoFsXZlnIqWPg",
	"user": {
	"email": "julia@email.com",
	"name": "Julia Albuquerque Correia",
	"type": "paciente",
	"registration": "",
	"id": 6
	}
}</span><br/><br/>

<h3>Login:</h3><br/>

<p>Para realização do login de um usuário já cadastrado, é necessário utilizar o endpoint abaixo:</p>
<p>Método: POST BASE_URL /login</p>
<p>Formato da requisição:</p>
<span>{
	"email": "julia@email.com",
    "password": "123456",
}</span><br/><br/>
<p>Formato de resposta - Status 200</p>
<span>{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvZ2VyaW9AZW1haWwuY29tIiwiaWF0IjoxNjU3MDY0ODU5LCJleHAiOjE2NTcwNjg0NTksInN1YiI6IjMifQ.C82daEa4LhpeeHnFXFPqfaOuxEW_s3lZ5zXFs53_RAE",
	"user": {
		"email": "rogerio@email.com",
		"name": "Rogerio Alves Cardoso",
		"type": "psicologo",
		"registration": "2123",
		"id": 3
	}
}}
</span><br/><br/>
<p>Formato de erro - Status 400</p>
<span>Email incorreto:  "Cannot find user" / </span>
<span>Senha incorreta:  "Incorrect password"</span><br><br/>

<h2 align="center">Rotas que dependem de TOKEN:</h2><br/>

<p>Nas rotas privadas é necessário informar no cabeçalho da requisição o campo "Authorization" da seguinte maneira:</p>
<p>> Authorization: Bearer {token}</p><br/>

<h3 align="center">Rotas PACIENTE:</h3><br/>
<p>Cadastrar Paciente:</p><br/>

<h4>OBS.:</h4>
<p>1. Não é possível realizar cadastro (POST) passando id no endpoint;</p><br/>
<p>2. Não é possível realizar cadastro (POST) sem o userId no corpo da requisição.</p><br/><br/>

<p>Para realização do cadastro de um paciente é necessário utilizar o endpoint abaixo:</p><br/>
<p>Método: POST BASE_URL /patients</p><br/>
<p>Formato da requisição</p>
<span>{
      	"userId": 6,
        "name" : "Julia Albuquerque Correia",
     	"img":"https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/totw_network_profile_400.jpg",
     	"age": 32,
     	"status": "solteiro",
	    "schooling" : "ensino médio completo",
	    "profession" : "Auxiliar Administrativo",
      	"complaint": "Desânimo, irritabilidade e sensação de pânico",
      	"medication": "nenhuma",
    	"disease" : "diabetes",
      	"medical_records": [{
				"date" : "",
				"description" : "",
				"psychologist" : ""
			}],
        "calendar" : []
}
</span><br/><br/>
<p>Formato de resposta - Status 201</p>
<span>{
	"userId": 6,
	"name": "Julia Albuquerque Correia",
	"img": "https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/totw_network_profile_400.jpg",
	"age": 32,
	"status": "solteiro",
	"schooling": "ensino médio completo",
	"profession": "Auxiliar Administrativo",
	"complaint": "Desânimo, irritabilidade e sensação de pânico",
	"medication": "nenhuma",
	"disease": "diabetes",
	"medical_records": [
		{
			"date": "",
			"description": "",
			"psychologist": ""
		}
	],
	"calendar": [],
	"id": 2
}</span><br/><br/><br/>

<h4>Editar Paciente:</h4><br/>

<h4>OBS.:</h4>
<p>1. Esse método utiliza o id gerado na response do cadastro (POST) - (último item identificado como "id");</p><br/><br/>

<p>Para editar um paciente cadastrado é necessário utilizar o endpoint abaixo:</p>
<p>Método: PATCH BASE_URL /patients/id </p><br/>

<p>Formato da requisição</p>
<span>{
	"img":"https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/totw_network_profile_400.jpg",
    "status": "casado",
	"schooling" : "Ensino Superior",
	“profession" : "Auxiliar Administrativo",
    "complaint": "Desânimo, irritabilidade e sensação de pânico",
    "medication": "nenhuma",
    "disease" : ""
 }
</span><br/><br/>
<p>Formato de resposta - Status 200</p>
<span>{
	"userId": 6,
	"name": "Julia Albuquerque Correia",
	"img": "https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/totw_network_profile_400.jpg",
	"age": 32,
	"status": "casado",
	"schooling": "Ensino Superior",
	"profession": "Auxiliar Administrativo",
	"complaint": "Desânimo, irritabilidade e sensação de pânico",
	"medication": "nenhuma",
	"disease": "",
	"medical_records": [
		{
			"date": "",
			"description": "",
			"psychologist": ""
		}
	],
	"calendar": [],
	"id": 1
}</span><br/><br/>
<p>Formato de Erro - Status 404:  { }</p><br/><br/>

<h4>Listar Paciente:</h4><br/>

<p>Para listar um paciente cadastrado é necessário utilizar o endpoint abaixo:</p>
<p>Método: GET BASE_URL /patients (todos)</p>
<p>(Método: GET BASE_URL /patients?userId=(número do ID) (paciente específico)</p><br/>

<p>Formato da requisição</p>
<span>Não é necessário um corpo de requisição (apenas o token em Authorization)</span><br/><br/>
<p>Formato de resposta - Status 200</p>
<span>[
	    {
		    "userId": 6,
		    "name": "Julia Albuquerque Correia",
		    "img": "https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/totw_network_profile_400.jpg",
		    "age": 32,
		    "status": "casado",
		    "schooling": "Ensino Superior",
		    "profession": "Auxiliar Administrativo",
		    "complaint": "Desânimo, irritabilidade e sensação de pânico",
		    "medication": "nenhuma",
		    "disease": "",
		    "medical_records": [
			    {
				    "date": "",
				    "description": "",
				    "psychologist": ""
			    }
		    ],
		    "calendar": [],
		    "id": 1
	    }
]</span><br/><br/>
<p>Formato de Erro - Status 404:  { }</p><br/><br/>

<h4>Editar Prontuário Paciente (Rota de acesso exclusivo ao Psicólogo):</h4><br/>

<p>Para editar o prontuário do paciente é necessário utilizar o endpoint abaixo:</p>
<p>Método: PATCH BASE_URL /patients/id</p><br/>

<p>Formato da requisição</p>
<span>{
      "medical_records": [{
			“date" : "06/07/2022",
			"description" : "Paciente relata muito desanimo com a vida de modo geral, também que constuma irritar-se fácil e por motivos diferentes e que em certos locais chega ter sensação de pânico como se algo ruim fosse acontecer. Nesta primeira anamnese, verificou-se que a paciente apresenta sentimento de abandono devido ao falecimento precoce de seu progenitor ainda na sua adolescência.",
			"psychologist" : "Rogerio Alves Cardoso" 
			}]
}</span><br/><br/>
<p>Formato de resposta - Status 200</p>
<span>{
	"userId": 6,
	"name": "Julia Albuquerque Correia",
	"img": "https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/totw_network_profile_400.jpg",
	"age": 32,
	"status": "casado",
	"schooling": "Ensino Superior",
	"profession": "Auxiliar Administrativo",
	"complaint": "Desânimo, irritabilidade e sensação de pânico",
	"medication": "nenhuma",
	"disease": "",
	"medical_records": [
		{
		"date": "06/07/2022",
		"description": "Paciente relata muito desanimo com a vida de modo geral, também que constuma irritar-se fácil e por motivos diferentes e que em certos locais chega ter sensação de pânico como se algo ruim fosse acontecer. Nesta primeira anamnese, verificou-se que a paciente apresenta sentimento de abandono devido ao falecimento precoce de seu progenitor ainda na sua adolescência.",
		"psychologist": "Rogerio Alves Cardoso"
		}
	],
	"calendar": [],
	"id": 1
}</span><br/><br/>
<p>Formato de Erro - Status 404:  { }</p><br/><br/>

<h3 align="center">Rotas PSICÓLOGO:</h3><br/>
<p>Cadastrar Psicólogo:</p><br/>

<h4>OBS.:</h4>
<p>1. Não é possível realizar cadastro (POST) passando id no endpoint;</p>
<p>2. Não é possível realizar cadastro (POST) sem o userId no corpo da requisição.</p><br/><br/>

<p>Para realização do cadastro de um novo profissional da psicologia é necessário utilizar o endpoint abaixo:</p>
<p>Método: POST BASE_URL /psychologists</p><br/>

<p>Formato da requisição</p>
<span>{
	"userId" : 3,
	"name" : "Rogerio Alves Cardoso",
	"img":"https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/totw_network_profile_400.jpg",
	"emphasis" : "Psicologia Clínica com ênfase em psicanalise",
	"experience" : "5 anos",
	"schedules" : "8:00 - 12:00",
	"working_days" : "Seg/Qua/Sex",
	"patients" : [],
	"calendar" : []
}
</span><br/><br/>
<p>Formato de resposta - Status 201</p>
<span>{
	"userId": 3,
	"name": "Rogerio Alves Cardoso",
	"img":"https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/totw_network_profile_400.jpg",
	"emphasis": "Psicologia Clínica com ênfase em psicanalise",
	"experience": "5 anos",
	"schedules": "8:00 - 12:00",
	"working_days": "Seg/Qua/Sex",
	"patients": [],
	"calendar": [],
	"id": 1
}
</span><br/><br/>
<p>Formato de Erro - Status 403</p>
<p>"Private resource creation: request body must have a reference to the owner id" (quando não foi enviada ao menos uma informação no corpo da requisição)</p><br/><br/>

<h4>Edição Psicólogo:</h4><br/>

<h4>OBS.:</h4>
<p>1. Esse método utiliza o id gerado na response do cadastro (POST) - (último item identificado como "id");</p><br/>

<p>Para editar as informações cadastradas é necessário utilizar o endpoint abaixo:</p>
<p>Método: PATCH BASE_URL /psychologists/id</p><br/>

<p>Formato da requisição</p>
<span>{
	"img":"https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/totw_network_profile_400.jpg",
	"emphasis" : "Psicologia Clínica com ênfase em psicanalise",
	"experience" : "5 anos",
	"schedules" : "8:00 - 12:00 / 14:00 - 18:00",
	"working_days" : "Seg/Qua/Sex"
}</span><br/><br/>
<p>Formato de resposta - Status 200</p>
<span>{
	"userId": 3,
	"name": "Rogerio Alves Cardoso",
	"img": "https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/totw_network_profile_400.jpg",
	"emphasis": "Psicologia Clínica com ênfase em psicanalise",
	"experience": "5 anos",
	"schedules": "8:00 - 12:00 / 14:00 - 18:00",
	"working_days": "Seg/Qua/Sex",
	"id": 1
}</span><br/><br/>
<p>Formato de Erro - Status 403</p>
<p>"Private resource creation: request body must have a reference to the owner id" (quando não foi enviada ao menos uma informação no corpo da requisição)</p><br/><br/>

<h4>Listar Psicólogos – Rota utilizada na Página 1 de pacientes:</h4><br/>

<p>Para listar os profissionais cadastrados é necessário utilizar o endpoint abaixo:</p>
<p>Método: GET BASE_URL /psychologists (todos)</p>
<p>(Método: GET BASE_URL /psychologists/id (profissional específico))</p><br/>

<p>Formato da requisição</p>
<span>Não é necessário um corpo de requisição (apenas o token em Authorization)</span><br/><br/>
<p>Formato de resposta - Status 200</p>
<span>[
	{
	"userId": 3,
	"name": "Rogerio Alves Cardoso",
	"img": "https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/totw_network_profile_400.jpg",
	"emphasis": "Psicologia Clínica com ênfase em psicanalise",
	"experience": "5 anos",
	"schedules": "8:00 - 12:00",
	"working_days": "Seg/Qua/Sex",
	"patients": [],
	"calendar": [],
	"id": 1
	},
{
	"userId": 4,
	"name": "Alice Tavares",
	"img": "https://www.attendit.net/images/easyblog_shared/July_2018/7-4-18/totw_network_profile_400.jpg",
	"emphasis": "Psicologia Clínica com ênfase em Terapia Cognitiva",
	"experience": "7 anos",
	"schedules": "14:00 - 18:00",
	"working_days": "Ter/Qua/Qui/Sex",
	"patients": [],
	"calendar": [],
	"id": 2
	}
]</span><br/><br/>
<p>Formato de resposta - Status 200</p>
<span>[ ] (quando não há nenhuma experiência cadastrada)</span><br/><br/>
<p>Formato de Erro - Status 401</p>
<p>"Missing authorization header" (quando não foi informado o token na Authorization)</p><br/>
