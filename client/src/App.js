import React, { Component } from "react";
// import FriendCard from "./components/FriendCard";
// import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import quiz_data from "./quiz_data.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    quiz_data
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const quiz_data = this.state.quiz_data.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.quiz_data.map(quiz => (
          <FriendCard
            // removeFriend={this.removeFriend}
            question={quiz.question}
            // key={friend.id}
            choices={quiz.choices}
          />
        ))}
      </Wrapper>
    );
  }
}

// will need a page like this for each question. Probably should add id to each object
// or make quiz num variable that starts at 0 and iterates
export default App;
