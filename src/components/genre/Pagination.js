import React from 'react'
import bootstrap from 'bootstrap'
import ReactPaginate from 'react-paginate'
import '../css/Pagination.css'

const Pagination = (props) => {
    const pageLinks = []
    console.log('pagination', props.pages);

    for (let i = 1; i <= props.pages; i++) {
        let active = props.currentPage === i ? 'active' : '';

        pageLinks.push(<li className={`waves-effect ${active}`} key={i} onClick={() => props.nextPage(i)}>
            <a href="#">{i}</a>
        </li>)

    }
    return (
        <div className="container">
            <div className="row">
                <ul className="pagination">
                    {pageLinks}
                </ul>
            </div>
        </div>
    )
}

export default Pagination
