import { Table } from 'react-bootstrap';

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Joe Black',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park'
  }
];

export const Movie = () => {
  let keys = ['popularity', 'title', 'release_date', 'overview'];

  return (
    <div style={{ width: '90%', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', margin: '20px auto auto' }}>
        {' '}
        Popular Movies for {new Date(Date.now()).toLocaleDateString()}
      </h2>

      <Table
        variant="default"
        style={{ width: '100%', margin: '20px auto' }}
        striped
        bordered
        responsive>
        <thead>
          <tr>
            {keys.map((heading) => {
              return <td key={heading}>{heading}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((movie) => {
            return (
              <tr key={movie.name}>
                <td>{movie.name}</td>
                <td>{movie.age}</td>
                <td>{movie.address}</td>
                <td>modal will go here…</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Movie;
