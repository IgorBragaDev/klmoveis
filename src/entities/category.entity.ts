import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import RealEstate from "./realestates.entity";

@Entity("categories")
export class Category {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 45, nullable: false, unique: true })
    name: string;

    @OneToMany(() => RealEstate, (realState) => realState.category)
    realState: RealEstate[]


}

export default Category


