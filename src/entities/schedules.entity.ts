import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import Users from "./users.entity";
import RealStates from "./realestates.entity";

@Entity("schedules")
export class Schedules {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ nullable: false })
    date: Date;

    @Column({ nullable: false })
    hour: Date;

    @ManyToOne(() => RealStates, { nullable: false })
    realEstate: RealStates

    @ManyToOne(() => Users, { nullable: false })
    userId: Users




}

export default Schedules


