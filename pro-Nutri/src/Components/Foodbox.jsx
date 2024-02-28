import { Component } from "react";

class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      calorie: this.props.Calorie,
    };
  }

  render() {
    // console.log(this.props)
    let Name = this.props.name;
    let Image = this.props.image;
    let Calorie = this.props.Calorie;
    let Index = this.props.Index;

    const handleClick = () => {
      let setState = {
        count: this.state.count + 1,
        calorie: this.props.Calorie * (this.state.count + 1),
      };
      this.setState(setState);
    };

    const buttonclick = () => {
      let change = {
        count: 0,
        calorie: 0,
      };
      this.setState(change);
    };

    return (
      <div>
        <div className="content">
          <div className="div" key={Index}>
            <article className="item">
              <div>
                <figure className="image is-64x64">
                  <img className="img" src={Image} />
                </figure>
              </div>
              <div>
                <div className="content">
                  <p>
                    <strong>{Name}</strong> <br />
                    <small>{Calorie}</small>
                  </p>
                </div>
              </div>
              <div>
                <div className="btns">
                  <div className="control">
                    <input
                      className="input"
                      type="number"
                      value={this.state.count}
                      onChange={()=>{}}
                    />
                  </div>
                  <div>
                    <button onClick={handleClick}>+</button>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="calc">
            <p>{this.state.count} {Name} =</p>
            <p>{this.state.calorie} calories</p>
            <div>
              <button className="reset" onClick={buttonclick}>
                reset
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default FoodBox;