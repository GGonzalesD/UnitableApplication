export interface Actividad {
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
