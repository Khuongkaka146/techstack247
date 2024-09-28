// Dữ liệu mẫu về các đội bóng
const teams = [
  { name: "Team A", points: 10, goalDifference: 5 },
  { name: "Team B", points: 10, goalDifference: 2 },
  { name: "Team C", points: 8, goalDifference: 4 },
  { name: "Team D", points: 8, goalDifference: 4 },
  { name: "Team E", points: 12, goalDifference: 8 },
];

// Hàm xếp hạng các đội bóng
function rankTeams(teams) {
  return teams.sort((a, b) => {
    // So sánh điểm số
    if (b.points !== a.points) {
      return b.points - a.points;
    }
    // Nếu điểm số bằng nhau, so sánh hiệu số bàn thắng bại
    if (b.goalDifference !== a.goalDifference) {
      return b.goalDifference - a.goalDifference;
    }
    // Nếu cả điểm số và hiệu số bằng nhau, so sánh tên đội
    return a.name.localeCompare(b.name);
  });
}

// Gọi hàm và in ra kết quả
const rankedTeams = rankTeams(teams);

// Hiển thị kết quả
console.log("Xếp hạng đội bóng:");
rankedTeams.forEach((team, index) => {
  console.log(
    `${index + 1}. ${team.name} - Điểm: ${team.points}, GD: ${
      team.goalDifference
    }`
  );
});
