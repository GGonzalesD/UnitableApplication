export interface Actividad {
    id: number;
    nombre: string;
    detalles: string;
    fecha_ini: Date;
    fecha_fin: Date;
    activa: boolean
}

export interface ActividadReq{
    nombre: string;
    detalles: string;
    fecha_ini: Date;
    fecha_fin: Date;
}
