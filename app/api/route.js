// ROUTE HANDLER (GET, POST, PUT, PATCH, DELETE)

export function GET(request) {
  console.log(request);
  //return Response.json();
  return new Response('Hello!');
}

/*export function POST(request) {
  console.log(request);
}*/
