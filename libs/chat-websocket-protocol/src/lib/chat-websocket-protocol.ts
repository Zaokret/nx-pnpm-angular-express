export type MessageTypes = 'connect' | 'message';
export type Message<Type extends MessageTypes, Body> = { type: Type, body: Body } 
