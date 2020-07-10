import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Repository {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    link: string;

    @Column()
    description: string;

    @Column('text', { array: true })
    tags: string;
}
