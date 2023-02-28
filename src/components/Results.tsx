import Card from './Card';

const Results = ({ results }: any) => (
  <div className='max-w-6xl py-4 mx-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
    {results.map((result: any) => (
      <Card key={result.id} result={result} />
    ))}
  </div>
);

export default Results;
