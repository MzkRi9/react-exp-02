import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import News from './components/News/index.jsx'

function App() {
  // const [箱の名前, 動作：箱のuseStateを設定する(原則setXxxxx、Xxxxxxは箱の名前)] = useState(useStateの初期値)
  // inputが2つあるので、入力したものを保持するためにuseStateを2つ用意する
  const [name, setName] = useState('名前入力')
  const [email, setEmail] = useState('メールアドレス入力')

  // イベント処理（何をしたら何をする）

  const handleNameChange = (e) => {
    // 処理を書きます
    setName (e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail (e.target.value);
  }

  // useEffectの前に追加でコンソールログを書く
  console.log('順番の確認しよう');

  useEffect(() => {
    // この中に書きます
    console.log('起動しました！');
  }, [])

  return (
    <>
     {/*  */}
     <News />
      <div>
        <p>名前が入ります</p>
        {/* inputに必ずvalue属性を設定する。そしてuseStateと紐づく */}
        <input type="text" placeholder='名前を入力してください' value={name} onChange={handleNameChange}/>
      </div>
      <div>
        <p>メールアドレスが入ります</p>
        <input type="text" placeholder='メールアドレスを入力してください' value={email} onChange={handleEmailChange}/>
      </div>

     {/*  */}
    </>
  )
}

export default App
