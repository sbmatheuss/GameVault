import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { CartRepository } from './cart.repository';
import { ExecuteHandler } from '../../core/handlers/handler.execute';

const execute = new ExecuteHandler();
const repository = new CartRepository(execute);
const service = new CartService(repository);
const controller = new CartController(service);

export const cartRouter = controller.router;
