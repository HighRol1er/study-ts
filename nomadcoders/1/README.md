⭐ Javascript
└ 매우 유연해서 에러를 잘 보여주지 않음
🚫 숫자 배열 + false
→ 배열이 사라지고 string으로 바뀜
🚫 함수의 인자가 잘못 들어가도 실행됨
→ return값이 NaN일 뿐, 에러가 나지 않음
🚫 const a = { a: "A" };
a.hello();
실행 시 에러 발생
→ 실행 전에 에러 감지 불가

⭐ Typescript
└ 타입 안정성 → 버그 감소
└ Strongly typed programming
└ 컴파일 시 javascript로 변환됨
└ 에러가 발생 → 컴파일 X

⭐ Type 시스템
└ 명시적 정의(변수 선언 시 타입 정의)
let a: boolean = "x"
→ 🚫 boolean 타입에 string타입 할당 불가 알림

└ 변수만 생성(타입 추론)
let b = "hello"
→ b가 string 타입이라고 추론
b = 1
→ 🚫 string 타입에 number타입 할당 불가 알림
