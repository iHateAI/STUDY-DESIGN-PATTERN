/**
 * 늦은 초기화 방식의 싱글톤 패턴 (Lazy Initialization)
 * 지연 적재
 * 실제로 사용되기 전까지 인스턴스 생성과 초기화가 발생하지 않음
 * 리소스가 많은 경우 해당 방식은 적절치 않고 즉시 초기화 방식으로 미리 생성하는 것이 좋음
 */

import { AtomicId } from "./utils/AtomicId";

class IdGenerator {
  private id: AtomicId = new AtomicId();
  private static instance: IdGenerator;

  private constructor() {}

  public static getInstance(): IdGenerator {
    if (!IdGenerator.instance) {
      IdGenerator.instance = new IdGenerator();
    }

    return IdGenerator.instance;
  }

  public getId(): string {
    return this.id.getId();
  }
}
