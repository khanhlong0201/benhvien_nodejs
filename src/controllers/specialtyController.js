import specialtyService from '../services/specialtyService'

let CreateSpecialty = async (req, res) => {
    try {
        let infor = await specialtyService.CreateSpecialty(req.body);
        return res.status(200).json(infor);
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server...'
        })
    }
}

let getAllSpecialty = async (req, res) => {
    try {
        let infor = await specialtyService.getAllSpecialty();
        return res.status(200).json(infor);
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the server...'
        })
    }
}

module.exports = {
    CreateSpecialty: CreateSpecialty,
    getAllSpecialty: getAllSpecialty
}