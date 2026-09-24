import { Injectable } from "@nestjs/common";
import { OrderEntity } from "./entities/order.entity";

@Injectable()
export class OrderPriorityService {
  classify(order: OrderEntity) {
    let priority = "normal";
    let message = "Order has normal priority";

    if (order.quantity >= 2 && order.quantity <= 3) {
      priority = "medium";
      message = "Order has medium priority";
    }

    if (order.quantity >= 4) {
      priority = "high";
      message = "Prepare this order soon";
    }
    if (order.status === "ready") {
      priority = "completed";
      message = "Order is ready";
    }

    return { priority, message };
  }
}