import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>Hello World</h1>
`;

// learning

// Tuples 元組
// 長度，類型，順序固定
let color: [number, number, number] = [255, 255, 255];

type HttpResponse = [number, string];

const res: HttpResponse = [200, 'ok'];

const responses: HttpResponse[] = [[404, 'not find']];

// Enums 枚舉

enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const orderStatus = OrderStatus.DELIVERED;
console.log(orderStatus);

const isDelivered = (status: OrderStatus): boolean => {
  return status === OrderStatus.DELIVERED;
};

console.log(isDelivered(1));
console.log(isDelivered(OrderStatus.RETURNED));

const enum ArrowKey {
  UP = 'up',
  RIGHT = 'right',
  DOWN = 'down',
  LEFT = 'left',
}
