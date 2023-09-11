import { getRounds, hashSync } from "bcryptjs";
import { Column, Entity, PrimaryGeneratedColumn, DeleteDateColumn, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate } from "typeorm";

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

    @Column({ nullable: false, length: 120 })
    password: string;

    @CreateDateColumn({ type: "date" })
    createdAt: string;

    @UpdateDateColumn({ type: "date" })
    updatedAt: string;

    @DeleteDateColumn({ nullable: true })
    deletedAt: Date;
    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        const hasRounds: number = getRounds(this.password);
        if (!hasRounds) {
            this.password = hashSync(this.password, 10);
        }
    }


}

export default User


