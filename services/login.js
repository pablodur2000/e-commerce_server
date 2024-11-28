
const jsonwebtoken = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const fs = require('fs').promises;
const path = require('path');

const loginService = async (user, password) => {
    let result = "";

  try {
    // Construir la ruta absoluta del archivo
    const filePath = path.resolve('/users.json');
        
    // Leer el archivo
    const data = await fs.readFile(filePath, 'utf8');
    
    // Parsear el contenido a JSON
    const users = JSON.parse(data);

    console.log(users);

    const findedUser = users.find(u => u.username === user); 
    const findedPass = users.find(u => u.password === password); 
    
    if (!findedUser || !findedPass) { 
        result = false;
    }else{
        const token = jsonwebtoken.sign(
            {
              user_id: findedUser.id,
              user_name: findedUser.username,
            },
            process.env.SECRET_KEY,
            { expiresIn: '1h' }
          );

        result = { message: "Inicio de sesión correcto", token: token }
    }

    return result;
    
  } catch (error) {
    // Manejar el error si el archivo no existe
    if (error.code === 'ENOENT') {
        console.error(`Archivo no encontrado`);
        return { error: `Los usuarios no existen.` }; // Devuelve un mensaje claro
    } else {
        // Si es otro tipo de error, lanzarlo
        console.error('Error al obtener los usuarios:', error);
        throw error;
    }
  }
};


module.exports = loginService;