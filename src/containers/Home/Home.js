import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import { connect } from 'react-redux'
import { setCharacters, removeOneCharacter }  from '../../actions/homeAction'


class Home extends Component {

    /*removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    };*/

    removeCharacter = (index) => {
      const { characters, removeOneCharacter } = this.props;
      removeOneCharacter(characters, index)
      /*this.setState({
          characters:characters.filter((ca,i)=>{
              return i !== index;
          })
      })*/
    };


    handleSubmit = character => {
        const {setCharacters} = this.props;
        setCharacters(character);
       /* this.setState({characters: [...this.state.characters, character]});*/
    };

    render() {
        const { characters } = this.props;
        
        return (
            <div className="container">
                <h1>React Tutorial</h1>
                <p>Add a character with a name and a job to the table.</p>
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <h3>Add New</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}
const mapStateToProps = state => ({
    characters:state.homeReducer.characters
});
const mapDispatchToProps = {
    setCharacters,
    removeOneCharacter
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);