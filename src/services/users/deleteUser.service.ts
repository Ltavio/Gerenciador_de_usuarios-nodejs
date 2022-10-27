import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";

const deleteUserService = async (
  id: string
): Promise<User | Array<string | number>> => {
  const userRepo = AppDataSource.getRepository(User);

  const findUser = await userRepo.findOneBy({
    id,
  });

  if (!findUser) {
    return [404, "User not found"];
  }

  if (!findUser.isActive) {
    throw new Error("User not active");
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
