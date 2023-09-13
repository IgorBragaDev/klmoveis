import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Addresses from "./addresses.entity";
import Categories from "./category.entity";
import { date } from "zod";
import Schedule from "./schedules.entity";

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

    @CreateDateColumn({ type: "date", nullable: false })
    createdAt: Date;

    @UpdateDateColumn({ type: "date", nullable: false })
    updatedAt: Date;


    @OneToOne(() => Addresses)
    @JoinColumn()
    address: Addresses

    @ManyToOne(() => Categories)
    category: Categories

    @OneToMany(() => Schedule, (schedule) => schedule.realEstate)
    schedules: Schedule[]

}

export default RealEstate


