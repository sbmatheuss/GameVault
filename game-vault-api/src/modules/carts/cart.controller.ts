// cart.controller.ts

import { Request, Response, Router } from "express";
import { CartService } from "./cart.service";

export class CartController {
  public readonly router: Router;

  constructor(private readonly cartService: CartService) {
    this.router = Router();
    this.registerRoutes();
  }

  private registerRoutes(): void {
    this.router.post("/cart", this.create.bind(this));
    this.router.get("/cart", this.findAll.bind(this));
    this.router.get("/cart/:id", this.findById.bind(this));
    this.router.patch("/cart/:id", this.update.bind(this));
    this.router.delete("/cart/:id", this.delete.bind(this));
  }

  private async create(req: Request, res: Response): Promise<void> {
    const { name } = req.body;
    const cartItem = await this.cartService.create({ name });
    res.status(201).json(cartItem);
  }

  private async findAll(req: Request, res: Response): Promise<void> {
    const carts = await this.cartService.findAll();
    res.status(200).json(carts);
  }

  private async findById(req: Request, res: Response): Promise<void> {
    const { id } = req.params as { id: string };
    const cartItem = await this.cartService.findById(id);
    res.status(200).json(cartItem);
  }

  private async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params as { id: string };
    const { name } = req.body;
    const cartItem = await this.cartService.update(id, { name });
    res.status(200).json(cartItem);
  }

  private async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params as { id: string };
    await this.cartService.delete(id);
    res.status(200).json({ message: "Carrinho deletado com sucesso!" });
  }
}