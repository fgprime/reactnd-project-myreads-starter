import React from 'react';
const shelfs = require('./shelfs.json');

class BookShelfChanger extends React.Component {
    state = {
        shelf: this.props.book.shelf || 'none',
    };

    updateBookShelf = (event) => {
        const shelf = event.target.value;
        const book = this.props.book;

        this.setState((prevState) => ({
            shelf: shelf,
        }));
        this.props.updateBookShelf(book, shelf);
        console.dir(event.target.value);
    };

    render() {
        return (
            <div className="book-shelf-changer">
                <select
                    value={this.state.shelf}
                    onChange={this.updateBookShelf}
                >
                    <option value="move" disabled>
                        Move to...
                    </option>
                    {shelfs.map((shelf) => (
                        <option value={shelf.id} key={shelf.id}>
                            {shelf.name}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
}

export default BookShelfChanger;
