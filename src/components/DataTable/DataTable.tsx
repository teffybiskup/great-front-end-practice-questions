/** 
 * Given a list of users, build a users data table that displays users in a paginated format.
 * 
 * Requirements:
 *   Table requirements:
 *     The users data table should display the following columns: Id, Name, Age, Occupation
 *     Each row in the table represents a single user
 *   Pagination requirements:
 *     The pagination controls should allow the user to navigate to previous and next pages
 *     The pagination controls should display the current page number and the total number of pages
 *     The table should update dynamically when the user navigates to a different page
 *     Provide an option to select the number of users displayed per page (e.g., 5, 10, 20)
 * 
 */
import React, { useEffect, useState, useMemo, ChangeEvent } from 'react';
import users from '../../helpers/users';
import "./DataTable.scss"

function DataTable() {
  const [maxUsersNumber, setMaxUsersNumber] = useState<number | "">(5);
  const [debouncedUsersNumber, setDebouncedUsersNumber] = useState(5);
  const [page, setPage] = useState(1);

  const pages = debouncedUsersNumber > 0 ? Math.ceil(users.length / debouncedUsersNumber) : 1;

  useEffect(() => {
    if (maxUsersNumber === "" || maxUsersNumber <= 0) return;

    const timeoutId = setTimeout(() => {
      setDebouncedUsersNumber(Number(maxUsersNumber));
      setPage(1);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [maxUsersNumber]);

  const paginatedUsers = useMemo(() => {
    if (!debouncedUsersNumber) return [];

    const start = (page - 1) * debouncedUsersNumber;
    const end = start + debouncedUsersNumber;

    return users.slice(start, end);
  }, [debouncedUsersNumber, page]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setMaxUsersNumber(value === "" ? "" : Math.max(1, Number(value)));
  };

  const changePage = (direction: number) => {
    setPage((prev) => {
      const next = prev + direction;
      if (next < 1) return 1;
      if (next > pages) return pages;
      return next;
    });
  };

  return (
    <div className="pagination">
      <div className="number-users">
        <label htmlFor='users'>Number of users displayed per page:</label>
        <br/>
        <input
          id="users"
          data-testid="users-input"
          type="number"
          value={maxUsersNumber}
          onChange={handleInputChange}
          min={1}
          placeholder="Users per page"
        />
      </div>
      <div className="pages">
        <span> Total: {pages} </span>
        <br/>
        <button onClick={() => changePage(-1)} disabled={page === 1}>←</button>
        <span> Page: {page} </span>
        <button onClick={() => changePage(1)} disabled={page === pages}>→</button>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            {[
              { label: 'ID', key: 'id' },
              { label: 'Name', key: 'name' },
              { label: 'Age', key: 'age' },
              { label: 'Occupation', key: 'occupation' },
            ].map(({ label, key }) => (
              <th key={key}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.map(({ id, name, age, occupation }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
