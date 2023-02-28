const Results = ({ results }: any) => (
  <div>
    {results.map((result: any) => (
      <div key={result.id}>{result.original_title}</div>
    ))}
  </div>
);

export default Results;
