import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';

const clientPath = `${__dirname}/../../client/out`;

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: clientPath,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
