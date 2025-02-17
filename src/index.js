import dotenv from "dotenv";
import expressService from "./services/express.service";
import sequelizeService from "./services/sequelize.service";
dotenv.config();

const services = [expressService, awsService, sequelizeService];

(async () => {
  try {
    for (const service of services) {
      await service.init();
    }
    console.log("Server initialized.");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();
