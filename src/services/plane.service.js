import 'dotenv/config'


export async function getAllPlane(req) {

    /* 
    param dans query = req.params.{tonParam}    
    param dans body (json) = req.body.{tonParam}    
    */

    if (1 == 1) {

        return ["Avion1", "Avion2"]

    } else {
        return { error: "Error : There is no plane", code: 400 }
    }
}