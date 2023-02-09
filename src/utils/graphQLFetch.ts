export async function graphQLFetch<T extends GraphQlData>(
  url: string,
  query: string,
  variables = {}
): Promise<T> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) {
    throw new Error(`${res.status}: ${res.statusText}`);
  }

  // cast the response JSON to GraphQlResponse with the supplied data type `T`
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const graphQlRes: GraphQlResponse<T> = await res.json();
  if (graphQlRes.errors) {
    throw new Error(graphQlRes.errors.map((err) => err.message).join("\n")); // you might want to create a custom Error class
  }
  return graphQlRes.data;
}

type GraphQlData = { [key: string]: any, [index: number]: never };
interface GraphQlResponse<T extends GraphQlData> {
  data: T;
  errors?: Array<{ message: string }>;
}
