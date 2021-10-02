import {Request, Response} from "express";
import { ReplSet } from "typeorm";
import {UsersService} from "../Services/UsersService"

class UsersController {

    async create(req: Request, resp: Response): Promise<Response> {
        const {email} = req.body;
''
        const usersService = new UsersService();

        const user = await usersService.create(email);

        return resp.json(user);
    }

    async findByEmail(req: Request, resp: Response) {
        const {email} = req.body;

        const usersService = new UsersService();

        const user = await usersService.findByEmail(email);

        return resp.json(user);
    }
}

export {UsersController}