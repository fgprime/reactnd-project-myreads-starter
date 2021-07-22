import React from 'react';
const shelfs = require('./shelfs.json');

class BookShelfChanger extends React.Component {
    render() {
        const bookShelf = this.props.book.shelf;
        console.dir(bookShelf);
        return (
            <div className="book-shelf-changer">
                <select value={bookShelf}>
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
