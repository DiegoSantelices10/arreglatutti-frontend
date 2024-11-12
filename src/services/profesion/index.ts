import { SERVICES } from "@/enviroments";
import { getApi } from "..";

export const obtenerProfesiones = async () => {
    const response = await getApi({
        path: SERVICES.PROFESIONES.OBTENER_PROFESIONES,
        method: 'GET',
        query: "?[fields][0]=name&[fields][1]=slug&[fields][2]=image"
    });
    return response.data;       
};

