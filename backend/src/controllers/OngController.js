const crypto = require('crypto'); // módulo da biblioteca express que pode ser utilizado para gerar uma string aleatória (que será utilizada na geração do id)
const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const ongs = await connection('ongs').select('*');
            
        return res.json(ongs);
    },

    async create(req, res) {
        const {name, email, whatsapp, city, uf} = req.body;

        const id = crypto.randomBytes(4).toString('HEX'); // gera 4 caracteres aleatórios e os converte para base hexadecimal

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return res.json({ id });
    },
};