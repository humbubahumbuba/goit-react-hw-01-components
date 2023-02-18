import PropTypes from 'prop-types';
import { Table, TableHeader, TableBody, TableItem, TableText } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return <Table>
        <TableHeader >
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </TableHeader >
        <TableBody>
            {items.map(item => (
                <TableItem key={item.id}>
                    <TableText>{item.type}</TableText>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </TableItem>
            ))}
        </TableBody>
    </Table>
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
}



          
              
  



 