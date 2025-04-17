import { http, HttpResponse } from "msw";

const challangesDetailData = [
  {
    "problemId": 1,
    "title": "두 수의 곱 구하기",
    "description": "정수 num1, num2가 매개변수 주어집니다. num1과 num2를 곱한 값을 return 하도록 solution 함수를 완성해주세요.",
    "difficulty": 0,
    "tags": "코딩테스트 입문",
    "exampleInput": "[\"#.##.\", \"#o###\", \".o.#.\", \"#..#.\"]",
    "exampleOutput": "27",
    "totalSubmitted": 1023,
    "totalAccuracy": "91"
  },
]
//http://localhost:8000/api/challenges
export const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}/problems`, () => {
    return HttpResponse.json({
      content: [{problemId: 1, title: "문자열과 알파벳과 쿼리", difficulty: 5, tag: "2025 프로그래머스 코드챌린지 본선", total_submitted: 13, total_accuracy: 0.0},
        {problemId: 2, title: "눈사람 만들기", difficulty: 5, tag: "2025 프로그래머스 코드챌린지 본선", total_submitted: 9, total_accuracy: 0.0},
        {problemId: 3, title: "격자 뒤집기 미로", difficulty: 4, tag: "2025 프로그래머스 코드챌린지 본선", total_submitted: 26, total_accuracy: 4.0},
        {problemId: 4, title: "가장 큰 삼각형 덩어리", difficulty: 4, tag: "2025 프로그래머스 코드챌린지 본선", total_submitted: 28, total_accuracy: 5.0},
        {problemId: 5, title: "봉인된 주문", difficulty: 3, tag: "2025 프로그래머스 코드챌린지 2차 예선", total_submitted: 587, total_accuracy: 26.0},
        {problemId: 6, title: "완전 범죄", difficulty: 2, tag: "2025 프로그래머스 코드챌린지 2차 예선", total_submitted: 1138, total_accuracy: 29.0},
        {problemId: 7, title: "택배 상자 꺼내기", difficulty: 1, tag: "2025 프로그래머스 코드챌린지 2차 예선", total_submitted: 2384, total_accuracy: 35.0},
        {problemId: 8, title: "[PCCE 기출문제] 1번 / 문자 출력", difficulty: 0, tag: "PCCE 기출문제", total_submitted: 15714, total_accuracy: 72.0},
      ],
    });
  }),
//http://localhost:8000/api/challenges/:problemId
  http.get(`${import.meta.env.VITE_API_URL}/problems/:problemId`, ({params}) => {
    const { problemId } = params;
    const problem = challangesDetailData.find((item) => item.problemId === Number(problemId));

    if (!problem) {
      return new HttpResponse("Not Found", { status: 404 });
    }

    return HttpResponse.json(problem);
  })
];