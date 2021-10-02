import { Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { EntityRepository } from "typeorm";

@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting> {

}

export { SettingsRepository }