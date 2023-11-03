import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from 'src/config/configuration';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [configuration.KEY],
      useFactory: (configService: ConfigType<typeof configuration>) => {
        const options: MysqlConnectionOptions = {
          type: 'mysql',
          host: configService.database.host,
          port: +configService.database.port,
          username: configService.database.user,
          password: configService.database.password,
          database: configService.database.database,
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          synchronize: false,
          logging: true,
        };
        return options;
      },
    }),
  ],
})
export class DatabaseModule {}
