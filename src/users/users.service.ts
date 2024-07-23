import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { User } from '../shared/interfaces/User.interface';

@Injectable()
export class UsersService {
  findUserById(userId: string): User {
    let users: Array<User> = [];

    try {
      const dataPath = path.join(__dirname, '../../data.json');
      const fileContents = fs.readFileSync(dataPath, 'utf8');
      users = JSON.parse(fileContents) as Array<User>;
    } catch (error) {
      console.log(`error while trying to access data.json: ${error}`);
    }

    const foundUser = users.find((user) => user.id === userId);

    if (!foundUser) {
      throw new Error(`user with id ${userId} not found`);
    }

    return foundUser;
  }
}
