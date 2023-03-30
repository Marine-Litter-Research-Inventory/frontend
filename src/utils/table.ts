type AuthorDetail = {
  id: { id: string; url: string; title: string }[];
  profile: string[];
  researchTopics: { [index: string]: number };
  methodologies: { [index: string]: number };
};

export function filterColumn(data: any) {
  const authorDetails: { [index: string]: AuthorDetail } = {};

  data.forEach((entry: any) => {
    const id = entry["ID"];
    const url = entry["Link to source"];
    const title = entry["Title"];

    const authors = entry["Author(s)"].split(";");
    const researchTopics = entry["Research Topics"].split(";");
    const methodologies = entry["Research Methodology Methodologies Used"]
      .split(";")
      .map((method: string) => {
        const foo = method.split("(");
        return foo[0].trim();
      });

    authors.forEach((author: string) => {
      author = author.trim();
      if (authorDetails[author]) {
        authorDetails[author].id.push({
          id,
          url,
          title,
        });
        authorDetails[author].researchTopics = countTerms(
          authorDetails[author].researchTopics,
          researchTopics
        );
        authorDetails[author].methodologies = countTerms(
          authorDetails[author].methodologies,
          methodologies
        );
      } else {
        authorDetails[author] = {
          id: [{ id, url, title }],
          researchTopics: countTerms({}, researchTopics),
          methodologies: countTerms({}, methodologies),
          profile: [
            `https://www.researchgate.net/search/researcher?q=${author.replace(
              " ",
              "%20"
            )}`,
            `https://orcid.org/orcid-search/search?searchQuery=${author.replace(
              " ",
              "%20"
            )}`,
            `https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=${author.replace(
              " ",
              "%20"
            )}`,
          ],
        };
      }
    });
  });

  return authorDetails;
}

function countTerms(init: { [index: string]: number }, terms: string[]) {
  terms.forEach((term: string) => {
    term = term.trim();
    if (init[term]) init[term] += 1;
    else init[term] = 1;
  });

  return init;
}

export type Row = {
  "Full Name": string;
  "Scholar Profile": string[];
  "Research Topics": string[];
  "Methodology Experienced": string[];
  "RRI ID": { id: string; url: string; title: string }[];
};

export function generateRows(authorDetails: { [index: string]: AuthorDetail }) {
  let rows: Row[] = [];
  Object.entries(authorDetails).forEach(([author, detail]) => {
    const researchTopics = Object.entries(detail.researchTopics).map(
      ([topic, count]) => `${topic} [${count}]`
    );
    const methodologies = Object.entries(detail.methodologies).map(
      ([method, count]) => `${method} [${count}]`
    );

    const row = {
      "Full Name": author,
      "Scholar Profile": detail.profile,
      "Research Topics": researchTopics,
      "Methodology Experienced": methodologies,
      "RRI ID": detail.id,
    };

    rows.push(row);
  });

  return rows;
}
