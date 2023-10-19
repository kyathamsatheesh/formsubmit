import React from 'react';

class ViewCustomers extends React.Component {
    render() {
        return (
            <div>
                <h6>This is Customer Details</h6>

                <div>
                    <ul>
                        <li>
                            Customer ID: {customElements.customerid}<br />
                    Customer Name: {customElements.customername}<br />
                    Country: {customElements.country}
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ViewCustomers;