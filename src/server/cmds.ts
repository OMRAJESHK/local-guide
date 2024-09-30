export const sqlcommand = {
  getAllCount: () => `SELECT COUNT(*) AS count FROM places`,
  getById: () => `SELECT * FROM places WHERE id = ?`,
  get: (page: number, limit: number, query: string) => {
    return `SELECT * FROM places WHERE title LIKE '%${query}%'
   OR description LIKE '%${query}%'
   OR category LIKE '%${query}%'
   OR place LIKE '%${query}%'
   OR known_for LIKE '%${query}%'
   OR map_link LIKE '%${query}%'
   OR person_known LIKE '%${query}%'
   OR remarks LIKE '%${query}%' ORDER BY title LIMIT ${limit} OFFSET ${
      (page - 1) * limit
    }`;
  },

  insert: () =>
    `INSERT INTO places (id, title, description, category, place, known_for, map_link, photo, person_known, person_mobile, remarks) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  update: () =>
    `UPDATE places SET title = ?, description = ?, category = ?, place = ?, known_for = ?, map_link = ?, photo = ?, person_known = ?, person_mobile = ?, remarks = ? WHERE id = ?`,
  delete: () => `DELETE FROM places WHERE id = ?`,
};
