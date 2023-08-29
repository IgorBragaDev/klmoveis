import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Addresses from "./addresses.entity";
import Categories from "./category.entity";

@Entity("realEstates")
export class RealEstate {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ default: false, nullable: false })
    sold: boolean;

    @Column({ nullable: false, type: "decimal", precision: 10, scale: 2, default: 0 })
    value: number;

    @Column({ nullable: false })
    size: number;

    @Column({ nullable: false })
    createdAt: Date;

    @Column({ nullable: false })
    uptadedAt: Date;

    @JoinColumn()
    @OneToOne(() => Addresses, { nullable: false })
    address: Addresses

    @ManyToOne(() => Categories, { nullable: false })
    categoty: Categories

}

export default RealEstate


