import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class LiteraryWork {
  @PrimaryColumn()
  code: string;

  @Column()
  title: string;

  @Column()
  category: string;

  @Column()
  authors: string;

  @Column()
  editor: string;

  @Column()
  status: string;
}
