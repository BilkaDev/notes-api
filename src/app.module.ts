import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { NotesModule } from "./notes/notes.module";
import { sqliteDataSource } from "./db/datasource";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [NotesModule, TypeOrmModule.forRoot(sqliteDataSource.options),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
