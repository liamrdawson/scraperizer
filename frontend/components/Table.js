import { formatDistanceToNow } from 'date-fns';

export default function Table({ scrapes }) {
  const reversedScrapes = [...scrapes].reverse();
  return (
    <table>
      <thead>
        <tr>
          <td>Count</td>
          <td>Time</td>
        </tr>
      </thead>
      <tbody>
        {reversedScrapes.map(scrape => (
          <tr key={scrape.date}>
            <td>{scrape.count}</td>
            <td>{`${formatDistanceToNow(new Date(scrape.date))} ago`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
