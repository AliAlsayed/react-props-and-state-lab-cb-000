import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="ui cards">
        {
          this.props.pets.map((pet, index) => {
            return <Pet pet={pet} index={index} onAdoptPet={this.props.onAdoptPet(index)}/>
          })
        }
      </div>
    )
  }
}

export default PetBrowser
