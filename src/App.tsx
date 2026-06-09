import { useState } from 'react'
import './App.css'

function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="container">
      <h1 className="title">⚽ 足球游戏</h1>
      <button className="btn" onClick={() => setShowModal(true)}>
        开始
      </button>

      {showModal && (
        <div className="overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>游戏简介</h2>
            <p>这是一款足球文字游戏。</p>
            <p>通过按钮交互来控制比赛进程，体验足球经理人的乐趣。</p>
            <button className="btn btn-close" onClick={() => setShowModal(false)}>
              关闭
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
