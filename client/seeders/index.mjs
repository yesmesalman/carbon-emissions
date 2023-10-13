import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  await prisma.$queryRaw`TRUNCATE user_roles`;
  await prisma.userRole.createMany({
    data: [{ name: "admin" }],
  });
  
  await prisma.$queryRaw`TRUNCATE users`;
  await prisma.user.createMany({
    data: [
      {
        name: "Salman",
        username: "yesmesalman",
        email: "admin@yahoo.com",
        password: "admin123",
        role_id: 1,
      },
    ],
  });
}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
