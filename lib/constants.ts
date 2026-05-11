import { User } from '../types';

export const INITIAL_USERS: User[] = [
  { id: '1', name: 'Admin', email: 'admin@email.com', role: 'Admin', passwordHint: 'admin1' },
  { id: '2', name: 'Modelo', email: 'modelo@email.com', role: 'Modelo', passwordHint: 'modelo1' },
  { id: '3', name: 'Cliente', email: 'cliente@email.com', role: 'Cliente', plan: 'Free', passwordHint: 'cliente1' },
  { id: '4', name: 'VIP', email: 'vip@email.com', role: 'Cliente', plan: 'VIP', passwordHint: 'vip1' },
  { id: '5', name: 'Laura Diamond', email: 'laura@spicy.com', role: 'Modelo', passwordHint: '123' },
  { id: '6', name: 'Isabella Gold', email: 'isabella@spicy.com', role: 'Modelo', passwordHint: '123' },
  { id: '7', name: 'Sophia Ruby', email: 'sophia@spicy.com', role: 'Modelo', passwordHint: '123' },
  { id: '8', name: 'Valentina', email: 'valentina@spicy.com', role: 'Modelo', passwordHint: '123' },
];
