import { DataSource, DataSourceOptions } from "typeorm";
import { User } from "../src/users/entities/user.entity"

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '',
    database: 'menu',
    entities: [User],
    synchronize: true,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;