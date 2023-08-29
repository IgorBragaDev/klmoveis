import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 50, nullable: false })
    name: string;

    @Column({ length: 45, nullable: true, unique: true })
    email: string;

    @Column({ nullable: false, default: false })
    admin: boolean;

    @Column({ nullable: false })
    password: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt: Date;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    uptadedAt: Date;

    @Column({ nullable: true })
    deletedAt: Date;

}

export default User


