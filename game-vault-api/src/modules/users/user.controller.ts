import { RequestHandler } from "express";
import { makeUserService } from "./user.factory";

const service = makeUserService()

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await service.create(data);
    return res.status(201).json(result)
  } catch (err: any) {
    throw next(err)
  }
};

export const findById: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params as { id: string };
    const result = await service.findById(id);
    return res.status(200).json(result)
  } catch (err: any) {
    throw next(err)
  }
};

export const findAll: RequestHandler = async (req, res, next) => {
  try {
    const result = await service.findAll();
    return res.status(200).json(result)
  } catch (err: any) {
    throw next(err)
  }
};

export const updateUser: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params as { id: string}
    const data = req.body;
    const result = await service.update(id, data);
    return res.status(200).json(result)
  } catch (err: any) {
    throw next(err)
  }
};

export const deleteUser: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params as { id: string};
    const result = await service.delete(id);
    return res.status(204).json(result)
  } catch (err: any) {
    throw next(err)
  }
};
