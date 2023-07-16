/**
 * 즉시 초기화 방식의 싱글톤 패턴 (eager-initialization)
 * 클래스가 메모리에 적재되는 동시에 인스턴스 생성
 * 
 */

import { AtomicId } from "./utils/AtomicId";

class IdGenerator {
  private id: AtomicId = new AtomicId();
  private static instance: IdGenerator = new IdGenerator();

  private constructor() {}

  public static getInstance(): IdGenerator {
    return this.instance;
  }

  public getId(): string {
    return this.id.getId();
  }
}
