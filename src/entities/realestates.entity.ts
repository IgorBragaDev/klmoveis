import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Addresses from "./addresses.entity";
import Categories from "./category.entity";

@Entity("realEstates")
export class RealEstate {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ default: false, nullable: false })
    sold: boolean;

    @Column({ nullable: false, type: "decimal", precision: 10, scale: 2, default: 0 })
    value: number | string;

    @Column({ nullable: false })
    size: number;

    @CreateDateColumn({ nullable: false })
    createdAt: Date;

    @UpdateDateColumn({ nullable: false })
    updatedAt: Date;

    @JoinColumn()
    @OneToOne(() => Addresses, { nullable: false })
    address: Addresses

    @ManyToOne(() => Categories, { nullable: false })
    category: Categories


}

export default RealEstate


