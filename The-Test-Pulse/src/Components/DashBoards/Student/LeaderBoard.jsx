import React from 'react'
import './LeaderBoard.css'
function LeaderBoard() {
  return (
    <div>
        <main id='Main'>

      <div id="leaderboard">
        <div className="ribbon"></div>
        <table>
          <tr>
            <td className="number">1</td>
            <td className="name">Lee Taeyong</td>
            <td className="points">
              258.244 <img className="gold-medal" src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true" alt="gold medal"/>
            </td>
          </tr>
          <tr>
            <td className="number">2</td>
            <td className="name">Mark Lee</td>
            <td className="points">258.242</td>
          </tr>
          <tr>
            <td className="number">3</td>
            <td className="name">Xiao Dejun</td>
            <td className="points">258.223</td>
          </tr>
          <tr>
            <td className="number">4</td>
            <td className="name">Qian Kun</td>
            <td className="points">258.212</td>
          </tr>
          <tr>
            <td className="number">5</td>
            <td className="name">Johnny Suh</td>
            <td className="points">258.208</td>
          </tr>
        </table>
        
      </div>
    </main>
    </div>
  )
}

export default LeaderBoard