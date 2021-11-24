export class Chat {
	id: number;
	grupo_id: number;
	detalles: string;
	cant_mensajes: number;
	mensajes: Message[];
	usuarios: Usuario[];
}

export class Message {
	id: number;
	chat_id: number;
	hora_mensaje: Date;
	mensaje: string;
	usuario_id: number;
	usuario_name: string;
}

export class Usuario{
	apellidos: string;
	correo: string;
	id: number;
	isPremium: boolean;
	nombres: string;
	num_monedas: number;
	tipo_usuario: string;
}
