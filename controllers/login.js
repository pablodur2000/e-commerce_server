const loginService = require("../services/login")

const login = async (req, res) =>{
    try {
        const { username, password } = req.params;

        const result = await loginService(username, password);

        if(!result){
            res.status(400).json({ error: "Usuario o contraseña incorrecta." });
        }else{
            res.status(200).json(result);
        }

    } catch (error) {
        res.status(500).json({message: "error en servidor", error})
    }
}

module.exports = login;