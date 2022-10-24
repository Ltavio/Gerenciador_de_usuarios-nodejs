import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";

const listUsersServices = async (): Promise<User[]> => {
  const userRepo = AppDataSource.getRepository(User);

  const users = await userRepo.find();

  return users;
};

export default listUsersServices;
