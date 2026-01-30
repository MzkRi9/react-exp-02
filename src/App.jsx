import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Chart from "./pages/chart";
import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/notfound";
import Customer from "./pages/customer";
import Orders from "./pages/order";

function App() {
  // inputが２個あるので、入力したものを保持するためにuseStateが２ついります🤗
  const [name, setName] = useState("名前入力");
  const [email, setEmail] = useState("メールアドレス入力");
  //今からやること：useStateを追加します！これはapiのデータを受け取るためです。絶対に入ります！
  const [data, setData] = useState([]);

  // イベント処理=クリックしたらXXXする,マウスを動かしたらXXXする、マウスが離れたらxxxx,.....
  const handleNameChange = (e) => {
    // 処理を書きます🤗
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    // 処理を書きます🤗
    setEmail(e.target.value);
  };

  useEffect(() => {
    // この中に書きます
    console.log("起動しました！！");

    const fetchData = async () => {
      try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        console.log(response, "response");
        // ここでjsの形に変換するjson()行なっています
        const data = await response.json();
        console.log(data, "中身");
        // 取得したjsの形のデータをuseStateの行為sんの処理で上書きする
        setData(data);
      } catch (error) {
        console.error("エラー:", error);
      }
      // おまじないの処理の終わり。下は消さない
    };

    // fetchDataを以下で動かします
    fetchData();

  // スプレッドシートAPIを記述を書いて、データを読み込む。読み込みができたら画面に表示する
  // 以下を消さない

  }, []);

    return (
    <>
      {/*  */}

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Router>

      <h1>データを表示する方法</h1>
      {data.map((item) => (
        <div key={item.id}>
          <p>{item.id}</p>
          <p>{item.title}</p>
          <p>{item.userId}</p>
        </div>
      ))}

      <div>
        <p>名前が入ります</p>
        <input
          type="text"
          placeholder="名前を入力してください"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <p>メールアドレスが入ります</p>
        <input
          type="text"
          placeholder="メールアドレスを入力してください"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      {/*  */}
    </>
  );
}

export default App;