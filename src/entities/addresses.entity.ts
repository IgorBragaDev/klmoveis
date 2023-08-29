import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("addresses")
export class Address {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 45, nullable: false })
    street: string;

    @Column({ nullable: false, length: 8 })
    zipCode: string;

    @Column({ nullable: false })
    number: number;

    @Column({ nullable: false, length: 20 })
    city: string;

    @Column({ nullable: false, length: 2 })
    state: string;



}

export default Address


