import { http, HttpResponse } from "msw";

export const handlers = [
  http.get('http://localhost:8000/api/challenges', () => {
    return HttpResponse.json([
      {problem_id: 1, title: "문자열과 알파벳과 쿼리", difficulty: 5, tag: "2025 프로그래머스 코드챌린지 본선", total_submitted: 13, total_accuracy: 0.0},
      {problem_id: 2, title: "눈사람 만들기", difficulty: 5, tag: "2025 프로그래머스 코드챌린지 본선", total_submitted: 9, total_accuracy: 0.0},
      {problem_id: 3, title: "격자 뒤집기 미로", difficulty: 4, tag: "2025 프로그래머스 코드챌린지 본선", total_submitted: 26, total_accuracy: 4.0},
      {problem_id: 4, title: "가장 큰 삼각형 덩어리", difficulty: 4, tag: "2025 프로그래머스 코드챌린지 본선", total_submitted: 28, total_accuracy: 5.0},
      {problem_id: 5, title: "봉인된 주문", difficulty: 3, tag: "2025 프로그래머스 코드챌린지 2차 예선", total_submitted: 587, total_accuracy: 26.0},
      {problem_id: 6, title: "완전 범죄", difficulty: 2, tag: "2025 프로그래머스 코드챌린지 2차 예선", total_submitted: 1138, total_accuracy: 29.0},
      {problem_id: 7, title: "택배 상자 꺼내기", difficulty: 1, tag: "2025 프로그래머스 코드챌린지 2차 예선", total_submitted: 2384, total_accuracy: 35.0},
      {problem_id: 8, title: "[PCCE 기출문제] 1번 / 문자 출력", difficulty: 0, tag: "PCCE 기출문제", total_submitted: 15714, total_accuracy: 72.0},
    ]);
  })
];