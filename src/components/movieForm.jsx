import React from 'react';

const  MovieForm = ({ match, history }) => {
    return (
        <div>
            <h1>Movie form {match.params.id}</h1>
            <buttton className="btn btn-primary" onClick={() => history.push('/movies')}> Save</buttton>
        </div>
    )
}


export default MovieForm;