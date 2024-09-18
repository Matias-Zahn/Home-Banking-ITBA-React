import HistoryCard from "./History-Card";

function History() {
  return (
    <div>
      <h3>Movimientos</h3>

      <div style={{ display: "grid", gap: "1rem" }}>
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
      </div>
    </div>
  );
}
export default History;
