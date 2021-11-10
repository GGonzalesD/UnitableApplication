export class Chat {
	id: number;
	grupo_id: number;
	detalles: string;
	cant_mensajes: number;
	mensajes: Message[];
}

export class Message {
	id: number;
	chat_id: number;
	hora_mensaje: Date;
	mensaje: string;
	usuario_id: number;
}