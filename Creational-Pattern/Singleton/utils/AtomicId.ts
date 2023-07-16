import { uuid } from "uuidv4";

export class AtomicId {
  private id: string = uuid();

  constructor() {}

  public getId(): string {
    return this.id;
  }
}
