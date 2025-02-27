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
            return <Pet pet={pet} onAdoptPet={this.props.onAdoptPet}/>
          })
        }
      </div>
    )
  }
}

export default PetBrowser
