/*export interface GroupPage {
	content: Group[];
	pageable: Pageable;
	totalElements: number;
	last: boolean;
	totalPages: number;
	size: number;
	number: number;
	numberOfElements: number;
	sort: Sort;
	first: boolean;
	empty: boolean;
}*/

export class Group {
	id: number;
	nombre: string;
	tema: string;
	descripcion: string;
	fecha_creacion: Date;
	fecha_fin: null|Date;
	char: Chat;
	curso: Curso;
}

export class GroupRequest {
	id: number;
	nombre: string;
	tema: string;
	descripcion: string;
	curso_n:string;
	curso_d:string;
}

export interface Chat {
	id: number;
	cant_mensajes: number;
	detalles: string;
	grupo_id: number;
}

export interface Curso {
	id: number;
	nombre: string;
	descripcion: string;
}
/*
export interface Pageable{
	sort: Sort;
	offset: number;
	pageSize: number;
	pageNumber: number;
	paged: boolean;
	unpaged: boolean;
}

export interface Sort{
	empty: boolean;
	sorted: boolean;
	unsorted: boolean;
}
*/