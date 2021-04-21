import React from 'react';
import foods from '../foods.json';
import { useState } from 'react';

const FoodBox = () => {
    
    let [quantity, setQuantity] = useState(0);


    return foods.map(eachFood=> {
        return (
            <div className="box">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img src={eachFood.image} />
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{eachFood.name}</strong> <br />
                      <small>{eachFood.calories}</small>
                    </p>
                  </div>
                </div>
                <div className="media-right">
                  <div className="field has-addons">
                    <div className="control">
                      <input className="input" type="number" value={eachFood.quantity} onChange={setQuantity(eachFood.quantity)}/>
                    </div>
                    <div className="control">
                      <button className="button is-info" onClick={e=>{ return ++eachFood.quantity}}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
        )}
    )
}

export default FoodBox;