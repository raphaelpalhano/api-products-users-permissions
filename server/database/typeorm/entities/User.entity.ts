import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BeforeUpdate,
  BeforeInsert,
} from 'typeorm';

import bcrypt from 'bcrypt';

@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  @BeforeUpdate()
  encryptPass() {
    this.password = bcrypt.hashSync(this.password, 10);
  }

  constructor(user: UsersEntity) {
    Object.assign(this, user);
  }
}
