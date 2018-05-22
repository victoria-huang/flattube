import React from 'react';

const ShowDetails = (props) => {
  
  const renderEpisodes = props.episodes.map (ep => {
      return <p>Season: {ep.season}, Episode: {ep.number} - {ep.name}</p>
    })

  return (
    <div>
      {renderEpisodes}
    </div>
  )
}

export default ShowDetails;
