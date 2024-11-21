import { SERVICES } from "@/enviroments";
import { getApi } from "..";
import { capitalizarPrimeraLetra } from "@/utils";

export const obtenerProfesionales = async (idProfesion: string) => {
    const text = capitalizarPrimeraLetra(idProfesion);

    const response = await getApi({
        path: SERVICES.PROFESIONALES.OBTENER_PROFESIONALES,
        method: 'GET',
        query: idProfesion 
        ?  `?filters[profesion][slug][$contains]=${text}&populate[imgProfile][fields][0]=url&populate[imgWorks][fields][1]=url` 
        : '',
    });
    return response.data;
}

export const obtenerProfesionalesPorCiudad = async (idCiudad: string) => {
    const response = await getApi({
        path: SERVICES.PROFESIONALES.OBTENER_PROFESIONALES,
        method: 'GET',
        query: idCiudad 
        ?  `?filters[ciudad][slug][$contains]=${idCiudad}&populate[imgProfile][fields][0]=url&populate[imgWorks][fields][1]=url` 
        : '',
    });
    return response.data;
}

