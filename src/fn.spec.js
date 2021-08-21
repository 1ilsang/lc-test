import { add } from "./utils";

const data = [];

describe("function test", () => {
  beforeEach(() => {
    // 각 테스트가 돌기 전 중복 작업들
    // 데이터 초기화 등이 일어남.
    // expect(false).toBe(true);
    data.length = 0;
  });

  afterEach(() => {
    // 각 테스트가 끝난 이후 돌아가는 작업
    // 데이터 정리 혹은 마무리
    // expect(false).toBe(true);
    // data = [];
  });

  it("push1", () => {
    data.push("a");
    expect(data.length).toBe(1);
  });

  it("push2", () => {
    data.push("b");
    expect(data.length).toBe(1);
  });

  it("add function: (1, 2) > 3", () => {
    const ret = add(1, 2);
    expect(ret).toEqual(3);
  });

  it("add function: ('1', 2) > 3", () => {
    const ret = add("1", 2);
    expect(ret).toEqual(3);
  });

  it("add function: ('1', '2') > 3", () => {
    const ret = add("1", "2");
    expect(ret).toEqual(3);
  });

  it("add function: ('1.123', '2') > 3.123", () => {
    const ret = add("1.123", "2");
    expect(ret).toEqual(3.123);
  });
});
