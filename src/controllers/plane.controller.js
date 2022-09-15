import * as planeServices from "../services/plane.service.js"

export async function getAllPlane(req, res, next) {
    try {
        let result = await planeServices.getAllPlane(req)

        //gestion retour  du services
        if (result.code) {
            res.status(result.code).json(result)
        } else {
            res.status(200).json(result)
        }
    } catch (err) {
        console.error(`[ERROR] Admin Controller searchItems : `, err);
        res.sendStatus(500)
    }
}

