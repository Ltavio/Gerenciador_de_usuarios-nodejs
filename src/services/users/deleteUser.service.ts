import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";

const deleteUserService = async (id: string): Promise<User> => {
  const userRepo = AppDataSource.getRepository(User);

  const findUser = await userRepo.findOneBy({
    id,
  });

  if (!findUser) {
    throw new Error("user not found");
  }

  await userRepo.update(id, {
    isActive: false,
  });

  const user = await userRepo.findOneBy({
    id,
  });

  return user!;
};

export default deleteUserService;
