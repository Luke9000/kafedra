import styles from "./styles.module.css";


import { Table } from '@mantine/core';

const Data = {
  head: ['Понедельник', 'Вторник', 'Среда'],
  body: [
    ['Системы ИИ', '10.05 - 11.40', 'Системы ИИ', '10.05 - 11.40', 'Системы ИИ', '10.05 - 11.40',],
    [7, 'Group: 15', 14.007, '±0.002', 'N', 'Nitrogen'],
    [39, 'Group: 3', 88.906, '±0.005', 'Y', 'Yttrium'],
    [56, 'Group: 2', 137.33, '±0.001', 'Ba', 'Barium'],
    [58, 'Group: 3', 140.12, '±0.002', 'Ce', 'Cerium'],
  ],
};

function Demo() {
  return (
    <Table >
      <thead>
        <tr>
          {Data.head.map((header, index) => (
            <th colSpan={2} key={index} className={styles.th}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Data.body.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Demo;
