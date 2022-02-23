import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OperatorsModule } from './operators/operators.module';

@Module({
  imports: [
    OperatorsModule,
    MongooseModule.forRoot('mongodb://localhost/nest-material-dashboard'),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      introspection: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
