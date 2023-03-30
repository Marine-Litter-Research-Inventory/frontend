import { create, insertBatch } from "@lyrasearch/lyra";
import { afterInsert } from "@lyrasearch/plugin-match-highlight";

import schemaDB from "data/schemaDB";

const database = await create({
  schema: schemaDB,
  hooks: { afterInsert },
  components: {
    tokenizer: {
      enableStemming: false,
    },
  },
});

export default database;
