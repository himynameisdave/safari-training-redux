import React, { Component, Fragment } from 'react';
import Button from './components/button.jsx';
import Title from './components/title.jsx';
import Board from './components/board.jsx';
import { createColumn, createCard } from './utils.js';
import initalState from './inital-state.js';


export default class App extends Component {

    state = initalState;

    handleAddColumn = () => this.setState(state => ({
        columns: state.columns.concat([createColumn()]),
    }));

    handleAddCard = (columnId) => this.setState(state => ({
        columns: state.columns.map(column => column.id !== columnId ? column : ({
            ...column,
            cards: column.cards.concat([createCard()]),
        })),
    }));

    handleDeleteCard = (columnId, cardId) => this.setState(state => ({
        columns: state.columns.map(column => column.id !== columnId ? column : ({
            ...column,
            cards: column.cards.filter(card => card.id !== cardId),
        })),
    }));

    handleMoveCard = (columnId, cardId) => {
        const { columns } = this.state;
        const oldColumnIndex = columns.findIndex(column => column.id === columnId);
        const oldCard = columns[oldColumnIndex].cards.find(card => card.id === cardId);
        return this.setState(state => ({
            columns: state.columns.map((column, index) => {
                if (index === oldColumnIndex) {
                    return {
                        ...column,
                        cards: column.cards.filter(card => card.id !== cardId),
                    };
                }
                if (index === oldColumnIndex + 1) {
                    return {
                        ...column,
                        cards: column.cards.concat([oldCard]),
                    };
                }
                return column;
            }),
        }));
    };

    handleDeleteColumn = (columnId) => this.setState(state => ({
        columns: state.columns.filter(column => column.id !== columnId),
    }));

    updateColumnTitle = (columnId, title) => this.setState(state => ({
        columns: state.columns.map(column => column.id !== columnId ? column : ({
            ...column,
            title,
        }))
    }));

    updateCardText = (columnId, cardId, text) => this.setState(state => ({
        columns: state.columns.map(column => column.id !== columnId ? column : ({
            ...column,
            cards: column.cards.map(card => card.id !== cardId ? card : ({
                ...card,
                text,
            }))
        }))
    }));

    render() {
        return (
            <Fragment>
                <Title />
                <Board
                    columns={this.state.columns}
                    onAddCard={this.handleAddCard}
                    onDeleteCard={this.handleDeleteCard}
                    onDeleteColumn={this.handleDeleteColumn}
                    onUpdateColumnTitle={this.updateColumnTitle}
                    onUpdateCardText={this.updateCardText}
                    onMoveCard={this.handleMoveCard}
                />
                <Button
                    className="board__add-column-button"
                    text="Add Column"
                    onClick={this.handleAddColumn}
                />
            </Fragment>
        );
    }
};
