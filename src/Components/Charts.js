
import React from 'react';
import {Bar} from 'react-chartjs-2';

function Charts({playlists}) {
  return (
  <div className="container mt-4 p-4">
 <Bar data={{
                 labels: playlists.map(item => item.playlistname),
                 datasets: [{
                    label: 'Top Most Viewed Playlist',
                    data:playlists.map(item => item.count),
                    backgroundColor: [
                        'rgba(0, 0, 0, 0.76)',
                        'rgba(0, 0, 0, 0.7)',
                        'rgba(0, 0, 0, 0.62)',
                        'rgba(0, 0, 0, 0.55)',
                        'rgba(0, 0, 0, 0.55)',
                        'rgba(0, 0, 0, 0.55)',
                        'rgba(0, 0, 0, 0.55)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            }} height={400}   options={{
                maintainAspectRatio:false,
            }}  />
  </div>
  );
}

export default Charts;
