import React from "react";

const CreateMovies = ({ onChangeForm, createMovie }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="p-3 mb-2 bg-dark text-white col-md-7 mrgnbtm">
          <h2>Create Movies</h2>
          <form>
            <div className="row">
              <div className="form-group col-md-10">
                <label htmlFor="exampleInputEmail1">Title</label>
                <input
                  type="text"
                  onChange={(e) => onChangeForm(e)}
                  className="form-control"
                  name="title"
                  id="title"
                  aria-describedby="emailHelp"
                  placeholder="Title"
                />
                </div>
              </div>
              <div className="row">
              <div className="form-group col-md-10">
                <label htmlFor="exampleInputPassword1">Genre</label>
                <input
                  type="text"
                  onChange={(e) => onChangeForm(e)}
                  className="form-control"
                  name="genre"
                  id="genre"
                  placeholder="Genre"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-10">
                <label htmlFor="exampleInputEmail1">Director</label>
                <input
                  type="text"
                  onChange={(e) => onChangeForm(e)}
                  className="form-control"
                  name="director"
                  id="director"
                  aria-describedby="emailHelp"
                  placeholder="Director"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-10">
                <label htmlFor="exampleInputEmail1">Release</label>
                <input
                  type="text"
                  onChange={(e) => onChangeForm(e)}
                  className="form-control"
                  name="release_year"
                  id="release_year"
                  aria-describedby="emailHelp"
                  placeholder="Release"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={(e) => createMovie()}
              className="btn btn-warning"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateMovies;
