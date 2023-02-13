import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Reader {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  uf: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  documentNumber: string;

  @Column()
  category: string; //TODO: change this to reader category type

  @Column()
  birthday: Date;
}
