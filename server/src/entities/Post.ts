import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Entity } from "typeorm";
@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id !: number;

    @Column()
    title !: string;

    @Column()
    description !: string;

    @CreateDateColumn()
    createdAt !: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}