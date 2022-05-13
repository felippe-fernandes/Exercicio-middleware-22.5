const regexDate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/

const validation = (req, res, next) => {
    const {productName, infos} = req.body;
    if (!productName) {
        return res.status(400).json({message: "O campo productName é obrigatório"})
    }
    if (productName.length < 4) {
        return res.status(400).json({message: "O campo productName deve ter pelo menos 4 caracteres"})
    }
    if (typeof infos !== 'object' || !infos) {
        return res.status(400).json({ message: "O campo infos é obrigatório" })
    }
    if (!infos.saleDate) {
        return res.status(400).json({ message: "O campo saleDate é obrigatório" })
    }
    if (!infos.warrantyPeriod) {
        return res.status(400).json({ message: "O campo warrantyPeriod é obrigatório" })
    }
    if (!regexDate.test(infos.saleDate)) {
        return res.status(400).json({ message: "O campo saleDate não é uma data válida" })
    }
    if (!infos.warrantyPeriod) {
        return res.status(400).json({ "message": "O campo warrantyPeriod é obrigatório" })
    }
    if ((infos.warrantyPeriod > 3 || infos.warrantyPeriod < 1) ||!Number.isInteger(infos.warrantyPeriod)) {
        return res.status(400).json({ "message": "O campo warrantyPeriod precisa estar entre 1 e 3" })
    }
    return next();
}

module.exports = validation