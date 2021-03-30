import { useTable, useSortBy } from 'react-table';
import { useMemo } from 'react'; 
import { Link } from 'react-router-dom';

export default function Table({cols, datos, aceptar, denegar}) {
  const data = useMemo(
    () => [
        ...datos
    ],
    []
  )

  const columns = useMemo(
    () => [...cols],
    []
  )

  const getCell = (cell, row) =>{
    if(cell.column.id === 'edi_sol'){ 
      return <span className="material-icons" onClick={aceptar} style={{color: "green"}}> task </span>
    } else if(cell.column.id === 'ver_sol'){
      return <Link to={`/solicitud/${row.original._id}`}>
        <span className="material-icons" style={{color: "green"}}> edit </span>
      </Link>
    } else if(cell.column.id === 'den_sol'){
      return <span className="material-icons" onClick={denegar} style={{color: "green"}}> do_not_disturb_alt </span>
    } if(cell.column.id === 'edi_user'){ 
      return <span className="material-icons" onClick={aceptar} style={{color: "green"}}> task </span>
    } else if(cell.column.id === 'ver_user'){
      return <Link to={`/solicitud/${row.original._id}`}>
        <span className="material-icons" style={{color: "green"}}> remove_red_eye </span>
      </Link>
    } else if(cell.column.id === 'den_user'){
      return <span className="material-icons" onClick={denegar} style={{color: "green"}}> do_not_disturb_alt </span>
    } if(cell.column.id === 'permiso_administrador'){
      return <span className="material-icons" style={{color: cell.value === true ? "green": "gray"}}> check_box </span>
    } else {
      return cell.render('Cell')
    }
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy)

  return (
    <table {...getTableProps()} className="table table-bordered mx-3 p-1 shadow bg-white">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                {column.render('Header')}
                <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {                
                  return (
                    <td
                      {...cell.getCellProps()}
                    >{
                      getCell(cell, row)
                    }</td>
                  )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}