import Link from 'next/link';

function ClientsPage() {
  const clients = [
    { id: 'max', name: 'Maxmilian' },
    {
      id: 'jakub',
      name: 'Jakub',
    },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {/*<li>
          <Link href="/clients/max">Max</Link>
        </li>
        <li>
          <Link href="/clients/jakub">Jakub</Link>
        </li>*/}
        {clients.map((client) => (
          <li key={client.id}>
            {/*<Link href={`/clients/${client.is}`}>{client.name}</Link>*/}
            <Link
              href={{ pathname: '/clients/[id]', query: { id: client.id } }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ClientsPage;
