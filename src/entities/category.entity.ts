import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("categories")
export class Category {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 45, nullable: false })
    name: string;

}

export default Category


