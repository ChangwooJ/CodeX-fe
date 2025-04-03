import { http, HttpResponse } from "msw";

export const handlers = [
  http.get('http://localhost:8000/api/challenges', () => {
    return HttpResponse.json([
      {problem_id: 1, title: "문자열과 알파벳과 쿼리", difficulty: 0, tag: "simple problem", total_submitted: 100, total_accuracy: 80.0},
      {problem_id: 2, title: "문자열과 알파벳과 쿼리", difficulty: 0, tag: "simple problem", total_submitted: 100, total_accuracy: 80.0},
      {problem_id: 3, title: "문자열과 알파벳과 쿼리", difficulty: 0, tag: "simple problem", total_submitted: 100, total_accuracy: 80.0},
      {problem_id: 4, title: "문자열과 알파벳과 쿼리", difficulty: 0, tag: "simple problem", total_submitted: 100, total_accuracy: 80.0},
      {problem_id: 5, title: "문자열과 알파벳과 쿼리", difficulty: 0, tag: "simple problem", total_submitted: 100, total_accuracy: 80.0},
      {problem_id: 6, title: "문자열과 알파벳과 쿼리", difficulty: 0, tag: "simple problem", total_submitted: 100, total_accuracy: 80.0},
      {problem_id: 7, title: "문자열과 알파벳과 쿼리", difficulty: 0, tag: "simple problem", total_submitted: 100, total_accuracy: 80.0},
      {problem_id: 8, title: "문자열과 알파벳과 쿼리", difficulty: 0, tag: "simple problem", total_submitted: 100, total_accuracy: 80.0},
    ]);
  })
];