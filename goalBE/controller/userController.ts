import { Request, Response } from "express";
import userModel from "../model/userModel";
import bcrypt from "bcrypt";

export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userName, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const user = await userModel.create({ userName, email, password: hashed });

    return res.status(201).json({
      message: "user created",
      status: 201,
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
      data: error,
      status: 404,
    });
  }
};

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const users = await userModel.find();

    return res.status(200).json({
      message: "users found",
      status: 200,
      data: users,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "user Error",
      data: error.message,
      status: 404,
    });
  }
};

export const getOneUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userID } = req.params;
    const users = await userModel.findById(userID);

    return res.status(200).json({
      message: "user found",
      status: 200,
      data: users,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
      data: error,
      status: 404,
    });
  }
};

export const loginUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (user) {
      const decryptPassword = await bcrypt.compare(password, user.password);
      if (decryptPassword) {
        return res.status(200).json({
          message: "Welcome back",
          status: 200,
          data: user,
        });
      } else {
        return res.status(404).json({
          message: "password not correct",
          status: 404,
        });
      }
    } else {
      return res.status(404).json({
        message: "Email not found",
        status: 404,
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error",
      data: error,
      status: 404,
    });
  }
};
