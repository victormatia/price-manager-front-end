import TProduct from 'src/types/TProduct';

export default function TableRow({ code, cost_price, name, new_sales_price, sales_price }: TProduct) {
  return (
    <tr>
      <td>{ code }</td>
      <td>{ name }</td>
      <td>{ cost_price }</td>
      <td>{ sales_price }</td>
      <td>{ new_sales_price }</td>
    </tr>
  );
}
