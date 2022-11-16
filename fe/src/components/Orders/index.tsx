import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '6373d0b5c98277dbf4a15424',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza 4 Queijos',
          'imagePath': '1668533301139-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '6373d0b5c98277dbf4a15425'
      },
      {
        'product': {
          'name': 'Coca Cola',
          'imagePath': '1668533902959-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '6373d0b5c98277dbf4a15426'
      }
    ]
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="🕒️"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="👨‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={[]}
      />
    </Container>
  );
}
