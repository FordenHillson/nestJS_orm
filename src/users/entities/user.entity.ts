import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true })
    firstName: string;

    @Column({nullable: true })
    lastName: string;

    @Column({ nullable: true,default: true })
    isActive: boolean;
    
}
