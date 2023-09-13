import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import Users from "./users.entity";
import RealStates from "./realestates.entity";

@Entity("schedules")
export class Schedule {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "date", nullable: false })
    date: string;

    @Column({ type: "date", nullable: false })
    hour: string;

    @ManyToOne(() => RealStates, { nullable: false })
    realEstate: RealStates

    @ManyToOne(() => Users, { nullable: false })
    user: Users




}

export default Schedule


