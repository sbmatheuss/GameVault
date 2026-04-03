import { RequestHandler } from "express";
import { makeFavoriteService } from "./favorite.factory";

const service = makeFavoriteService();

export const createFavorite: RequestHandler = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await service.create(data);
    return res.status(201).json(result);
  } catch (err: any) {
    next(err);
  }
};

export const findAllFavorite: RequestHandler = async (req, res, next) => {
  try {
    const result = await service.findAll();
    return res.status(200).json(result);
  } catch (err: any) {
    next(err);
  }
};

export const findByIdFavorite: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params as { id: string };
    const result = await service.findById(id);
    return res.status(200).json(result);
  } catch (err: any) {
    next(err);
  }
};

export const updateFavorite: RequestHandler = async (req, res, next) => {
  try {
    const data = req.body;
    const { id } = req.params as { id: string };
    const result = await service.update(id, data);
    return res.status(200).json(result);
  } catch (err: any) {
    next(err);
  }
};

export const deleteFavorite: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params as { id: string };
    const result = await service.delete(id);
    return res.status(204).json(result);
  } catch (err: any) {
    next(err);
  }
};
