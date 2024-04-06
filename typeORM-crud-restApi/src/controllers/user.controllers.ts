import { Request, Response } from "express";
import { User } from "../entities/User";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname } = req.body;
    const user = new User();
    user.firstname = firstname;
    user.lastname = lastname;
    await user.save();
    console.log(user);
    return res.json(user);
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).json(e.message);
    }
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (e) {
    if (e instanceof Error) {
      return res.status(500).json({ message: e.message });
    }
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { firstname, lastname } = req.body;
  const { id } = req.params;
  try {
    const user = await User.findOneBy({ id: parseInt(id) });
    if (!user) throw new Error("user does not exist");
    await User.update({ id: parseInt(id) }, req.body);
    res.sendStatus(204);
  } catch (e) {
    if (e instanceof Error) {
      return res.status(500).json({ message: e.message });
    }
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await User.delete({ id: parseInt(id) });
    if (result.affected === 0) {
      return res.status(404).json({ message: "user not found" });
    }
    res.sendStatus(204);
  } catch (e) {
    if (e instanceof Error) {
      res.json({ message: e.message });
    }
  }
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.findOneBy({ id: parseInt(id) });
    res.json(user);
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).json({ message: e.message });
    }
  }
};
