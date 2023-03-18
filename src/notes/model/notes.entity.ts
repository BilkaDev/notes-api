import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Note extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @ApiProperty()
  id: string;

  @ApiProperty()
  @Column(
    { type: "text" }
  )
  content: string;

  @ApiProperty()
  @Column()
  title: string;

  @CreateDateColumn()
  @ApiProperty()
  createdAt: Date;
}
