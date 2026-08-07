import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module.js';
import { UsersModule } from './users/users.module.js';
import { HabitsModule } from './habits/habits.module.js';
import { HabitsEntriesModule } from './habits-entries/habits-entries.module.js';
import { StatisticsModule } from './statistics/statistics.module.js';
import { CommonModule } from './common/common.module.js';
import Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string().required(),

        PORT: Joi.number().default(3000),

        NODE_ENV: Joi.string()
          .valid('development', 'test', 'production')
          .default('development'),
      }),
    }),
    PrismaModule,
    AuthModule,
    UsersModule,
    HabitsModule,
    HabitsEntriesModule,
    StatisticsModule,
    CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
