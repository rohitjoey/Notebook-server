import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity() //entity corresponds to database table
export class Post {
  @PrimaryKey()
  _id!: number;

  @Property({ type: "date" }) //property corresponds to column in the table
  createdAt: Date = new Date();

  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Property({ type: "text" })
  title!: string;
}
