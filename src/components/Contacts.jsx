import React, { PureComponent } from 'react';
import NavButton from './NavButton'

export default class NavPanel extends PureComponent {

    createButtonItem(buttons) {
        return buttons.map((button) => {
            const { id, label } = button
            return (
                <NavButton key={id} label={label} />
            )
        })
    }
    navPanelRenderer = () => {
        const { buttons, border } = this.props
        const buttonItems = this.createButtonItem(buttons)
        return (
            <div style={{ border: border }}>
                {buttonItems}
            </div>
        )
    }
    render() {
        const renderer = this.navPanelRenderer()
        return renderer
    }
}

NavPanel.defaultProps = {
    border: "solid 2px red",
    buttons: [
        {
            id: 1,
            label: 'Навыки'
        },
        {
            id: 2,
            label: 'Образование'
        },
        {
            id: 3,
            label: 'Опыт работы'
        },
        {
            id: 4,
            label: 'Портфолио'
        },
        {
            id: 5,
            label: 'Контакты'
        }
    ]
}















class ActiveOrders extends PureComponent {
    createOrderItem(orders) {
        return orders.map((order) => {
            const { id, status, date, time, techType } = order;
            return (
                <div key={id} className='order-item'>
                    <div className='pre-order-item'>
                        <div className='info'>
                            <p> Заказ: <b> № {id} </b></p>
                            <p> Тип техники: <b> {techType} </b> </p>
                            <p> Статус: <b> {status} </b> </p>
                            <p> Дата и время заказа: <b> {time} / {date} </b> </p>
                        </div>
                        <div className='status'>
                        </div>
                    </div>
                    <hr />
                </div>
            )
        })
    }
    render() {
        const orders = this.props.orders;
        const orderItems = this.createOrderItem(orders);

        return (
            <div className='main-container'>
                <div className='orders'>
                    <p> АКТИВНЫЕ </p>
                    <hr />
                    <div className='active-order'>
                        {orderItems}
                    </div>
                </div>
            </div>
        )
    }

}