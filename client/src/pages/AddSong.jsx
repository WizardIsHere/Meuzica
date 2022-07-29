import React, {useState} from 'react'

import AddArtist from './AddArtist';
const AddSong = () => {
    const [input, setInput] = useState({
        name: "",
        released: "",
        rating: "",
    });

    const setData = (e) =>{
        console.log(e.target.value);
        const {name, value} = e.target;
        setInput((preval) => {
            return{
                ...preval,
                [name]: value
            }
        })
    }

    const addInputData = async (e) => {
      const res = await fetch("/register")
    }


  return (
    <div className="container">

      <form className="mt-3">
        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" className="form-label">
              Song Name
            </label>
            <input
              type="text"
              value={input.name}
              onChange={setData}
              className="form-control"
              name="sname"
            //   id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">
              Released Date
            </label>
            <input
              type="date"
              value={input.email}
              onChange={setData}
              className="form-control"
              name="email"
            //   id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" className="form-label">
              Ratings
            </label>
            <input
              type="number"
              value={input.phone}
              onChange={setData}
              className="form-control"
              name="phone"
            //   id="exampleInputPassword1"
            />
          </div>
          
          
          <button type="submit" onClick={addInputData} className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};


export default AddSong
