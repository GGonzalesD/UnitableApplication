export interface Usuario {

    id: number;
    nombres: string;
    apellidos: string;
    correo: string;
    carrera: string;
    num_act_completas: number;
    num_monedas: number;
    tipo_usuario: string;
}

export interface Recompensa{
    id: number;
    nombre: string;
    detalles:string;


}