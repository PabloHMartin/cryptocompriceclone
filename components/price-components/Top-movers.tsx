import { TopMover } from "../../lib/models/Top-mover";

export default function TopMovers({ topMovers }: { topMovers: TopMover[] }) {
  const cards = topMovers.map((mover: TopMover, index: number) => (
    <Card key={index} mover={mover} />
  ));

  return <>{cards}</>;
}

const Card = ({ mover }: { key: number; mover: TopMover }) => {
  return <div>{mover.name}</div>;
};
