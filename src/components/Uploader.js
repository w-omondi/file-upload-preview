import React from "react";

class Uploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      text: "",
      text1: "",
      text2: "",
      images: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.clear = this.clear.bind(this);
  }

  handleChange(event) {
    this.setState(
      {
        file: URL.createObjectURL(event.target.files[0]),
      },
      () => {
        // alert(this.state.file);
        console.log(this.state.file);
        this.state.images.push({ link: `${this.state.file}` });
        //post to database
      }
    );
  }
  changeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  clear() {
    this.setState({ text2: "sent", text1: "sent", text: "sen" });
  }

  render() {
    return (
      <div>
        <input type="file" onChange={this.handleChange} />

        <img src={this.state.file} alt="img" />

        {this.state.images.map((im, index) => (
          <img key={index} src={im.link} alt="img" />
        ))}

        <input
          type="text"
          name="text"
          value={this.state.text}
          onChange={this.changeHandler}
          placeholder="text here"
        />
        <input
          type="text"
          name="text1"
          value={this.state.text1}
          onChange={this.changeHandler}
          placeholder="text1 here"
        />
        <input
          type="text"
          name="text2"
          value={this.state.text2}
          onChange={this.changeHandler}
          placeholder="text2 here"
        />

        <button onClick={this.clear}>clear</button>
      </div>
    );
  }
}
export default Uploader;
