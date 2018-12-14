import React, { Component } from 'react';

class Completed extends Component {
    render() {
        const completed = this.props.todos.filter(todo => todo.isCompleted === true);
        return(
            <div className={'list'}>
                <ul>
                    {
                        completed.map(todo => {
                            return (
                                <li className={'item'} key={todo.id}>
                                    <div className={'complete'}>
                                        <input
                                            checked={ todo.isCompleted === true ? 'checked' : ''}
                                            type={'checkbox'}
                                            onChange={(e) => {
                                                this.props.handleChange(e, todo.id)
                                            }}/>
                                    </div>
                                    <span className={'todo-title'} style={{textDecoration: todo.isCompleted === true ? 'line-through' : 'none'}}>{todo.title}</span>
                                    <div className={'todo-remove'}>
                                        <a onClick={() => {
                                            this.props.removeTodo(todo.id)
                                        }} href={'javascript:void(0)'}>
                                            <svg className="svg-inline--fa fa-trash-alt fa-w-14" aria-hidden="true"
                                                 data-icon="trash-alt" data-prefix="far" role="img"
                                                 viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M192 188v216c0 6.627-5.373 12-12 12h-24c-6.627 0-12-5.373-12-12V188c0-6.627 5.373-12 12-12h24c6.627 0 12 5.373 12 12zm100-12h-24c-6.627 0-12 5.373-12 12v216c0 6.627 5.373 12 12 12h24c6.627 0 12-5.373 12-12V188c0-6.627-5.373-12-12-12zm132-96c13.255 0 24 10.745 24 24v12c0 6.627-5.373 12-12 12h-20v336c0 26.51-21.49 48-48 48H80c-26.51 0-48-21.49-48-48V128H12c-6.627 0-12-5.373-12-12v-12c0-13.255 10.745-24 24-24h74.411l34.018-56.696A48 48 0 0 1 173.589 0h100.823a48 48 0 0 1 41.16 23.304L349.589 80H424zm-269.611 0h139.223L276.16 50.913A6 6 0 0 0 271.015 48h-94.028a6 6 0 0 0-5.145 2.913L154.389 80zM368 128H80v330a6 6 0 0 0 6 6h276a6 6 0 0 0 6-6V128z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Completed;