import { ApiService } from "./Api.service"

const getPlantsUrl = {
    GetPlantsUrl: '/all'
}

 const getPlants = async () => {
    try {
        const result = await ApiService.get(getPlantsUrl.GetPlantsUrl)
        return result
    }
    catch (e) {
        console.log(e)
    }
}

export const getPlantService ={
    getPlants,
}