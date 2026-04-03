import { CartRepository } from "./cart.repository";
import { Cart, InsertCart, UpdateCart} from "./dtos/cart.dtos.types"
import { MySqlRawQueryResult } from "drizzle-orm/mysql2";

export class CartService {
    constructor(private readonly cartRepository: CartRepository) {}

    async create(data: InsertCart): Promise<Cart> {
        return this.cartRepository.create(data); 
    }

    async findById(id: string): Promise<Cart> {
        return this.cartRepository.findById(id);
    }

    async findAll(): Promise<Cart[]> {
        return this.cartRepository.findAll();
    }

    async update(id: string, data: UpdateCart): Promise<Cart> {
        return this.cartRepository.update(id, data);
    }

    async delete (id: string): Promise<MySqlRawQueryResult> {
        return this.cartRepository.delete(id);
    }
}