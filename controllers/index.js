const { getAllCatsService, getCatService, getProductsService, getProductsCommentsService, postCartService } = require("../services")


const getAllCats = async (req, res) => {
    try {
        const result = await getAllCatsService();
        
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message: "error en el servidor ", error})
    }
}

const getCats = async (req, res) => {
    const { id } = req.params;
    try {
        
        const result = await getCatService(id);
        
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message: "error en el servidor ", error})
    }
}

const getProducts = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await getProductsService(id);
        
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message: "error en el servidor ", error})
    }
}

const getProductComments = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await getProductsCommentsService(id);
        
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message: "error en el servidor ", error})
    }
}


const postCart = async (req, res) => {
    const { cart } = req.body; 
    try {
        const result = await postCartService(cart);
        console.log(cart);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message: "error en el servidor ", error})
    }
}





module.exports = {
    getAllCats,
    getCats,
    getProducts,
    getProductComments,
    postCart
}