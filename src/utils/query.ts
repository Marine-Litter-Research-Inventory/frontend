export type QueryType = {
  [index: string]: { array: string[]; operator: string };
};

export type QueryResultType = {
  [index: string]: { column: string; operator: string; pattern: string };
};

export function formatQuery(query: QueryType) {
  let temp: QueryResultType = {};

  for (const key in query) {
    const val = query[key].array;
    let pattern = "";
    const operator = query[key].operator;

    val.forEach((term, index) => {
      if (index === 0) pattern += term;
      else pattern += "|" + term;
    });

    temp[key] = { column: key, operator, pattern };
  }

  return temp;
}

export async function fetchSearch(query: QueryResultType) {
  return await fetch("http://188.166.237.116:8000/api", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(query),
  })
    .then((res) => res.json())
    .then((result) => result);
}
