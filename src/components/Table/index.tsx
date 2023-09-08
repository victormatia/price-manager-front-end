import { useContext } from 'react';

import context from 'src/context/context';

import TableRow from '../TableRow';

export default function Table() {
  const { updatedProducts } = useContext(context);
  return (
    <>
      {
        !!updatedProducts.length && (
          <table>
            <thead>
              <th>Product Code</th>
              <th>Product Name</th>
              <th>Cost Price</th>
              <th>Sales Price</th>
              <th>New Sales Price</th>
            </thead>
            <tbody>
              {
                updatedProducts.map((produc) => (
                  <TableRow
                    key={ produc.code }
                    code={ produc.code }
                    name={ produc.name }
                    cost_price={ produc.cost_price } 
                    sales_price={ produc.sales_price }
                    new_sales_price={ produc.new_sales_price }
                  />
                ))
              }
            </tbody>
          </table>
        )
      }
    </>
  );
}
