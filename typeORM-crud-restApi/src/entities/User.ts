import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({
    default: true
  })
  active: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAd: Date;
}
