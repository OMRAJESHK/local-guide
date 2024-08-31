export const sqlcommand = {
  get: (page: number, limit: number) =>
    `SELECT * FROM places LIMIT ${limit} OFFSET ${page - 1 * limit}`,
  getCount: (page: number, limit: number) =>
    `SELECT COUNT(*) AS count FROM places LIMIT ${limit} OFFSET ${
      (Number(page) - 1) * Number(limit)
    }`,
  insert: () => {
    return `INSERT INTO places (id, title, description, category, place, known_for, map_link, person_known, person_mobile, remarks) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  },
  update: () => {
    return `UPDATE places SET title = ?, description = ?, category = ?, place = ?, known_for = ?, map_link = ?, person_known = ?, person_mobile = ?, remarks = ? WHERE id = ?`;
  },
  delete: () => {
    return `DELETE FROM places WHERE id = ?`;
  },
};
