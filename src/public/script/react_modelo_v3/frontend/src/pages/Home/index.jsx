import React from 'react';

const Home = () => {
  return (
    <div>
        <div>
            <div className="row">
                <div className="col-12 col-sm-4">.col-12 .col-sm-4</div>
                <div className="col-12 col-sm-8">.col-12 .col-sm-8</div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-2">.col-12 .col-sm-2</div>
                <div className="col-12 col-sm-10">.col-12 .col-sm-10</div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-3">.col-12 .col-sm-3</div>
                <div className="col-12 col-sm-9">.col-12 .col-sm-9</div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-6">.col-12 .col-sm-6</div>
                <div className="col-12 col-sm-6">.col-12 .col-sm-6</div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-4">.col-12 .col-sm-4</div>
                <div className="col-12 col-sm-4">.col-12 .col-sm-4</div>
                <div className="col-12 col-sm-4">.col-12 .col-sm-4</div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-3">.col-12 .col-sm-3</div>
                <div className="col-12 col-sm-3">.col-12 .col-sm-3</div>
                <div className="col-12 col-sm-3">.col-12 .col-sm-3</div>
                <div className="col-12 col-sm-3">.col-12 .col-sm-3</div>
            </div>
        </div>
    
        <div className="container text-center">
          <div className="row justify-content-start">
            <div className="col-4">One of two columns</div>
            <div className="col-4">One of two columns</div>
          </div>
          <div className="row justify-content-center">
            <div className="col-4">One of two columns</div>
            <div className="col-4">One of two columns</div>
          </div>
          <div className="row justify-content-end">
            <div className="col-4">One of two columns</div>
            <div className="col-4">One of two columns</div>
          </div>
          <div className="row justify-content-around">
            <div className="col-4">One of two columns</div>
            <div className="col-4">One of two columns</div>
          </div>
          <div className="row justify-content-between">
            <div className="col-4">One of two columns</div>
            <div className="col-4">One of two columns</div>
          </div>
          <div className="row justify-content-evenly">
            <div className="col-4">One of two columns</div>
            <div className="col-4">One of two columns</div>
          </div>
        </div>
    
    </div>
  );
};

export default Home;