//Santa wish list form in ReactJS
const React = require("react");

class WishlistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      wish: "",
      priority: 1
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(target) {
    const value = target.value;
    const id = target.id;
    this.setState({
      [id]: value
    });
  };
  
  handleSubmit(event) { 
    this.props.send(this.state);
    event.preventDefault(); 
  };
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
            value={this.state.name}
            onChange={e => this.handleChange(e.target)}
            id="name"
        />
        <textarea
            value={this.state.wish}
            onChange={e => this.handleChange(e.target)}
            id="wish"
        />
        <select
            value={this.state.priority}
            id="priority"
            onChange={e => this.handleChange(e.target)}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
        </select>
      </form>
    );
  }
};

const EggList = (props) => {
    return (
        <ul>
            { props.eggs.map( (egg, index) => {
                return <EasterEgg name={ egg } key={ index } />
            })}
        </ul>
    )
};

const EasterEgg = (props) => {
  return (
    <li>{ props.name }</li>
  )
};