import { data3 } from "./data3";
import "./Bai3.css";
import myImage from "./assets/more.png";
function Bai3() {
  function Status() {
    return (
      <div style={{ backgroundColor: "green", borderRadius: 5 }}>
        <div
          style={{
            padding: 1,
            textAlign: "center",
            paddingLeft: 0,
            paddingRight: 0,
          }}
        >
          Done
        </div>
      </div>
    );
  }
  function Button() {
    return (
      <button
        className="buttonMore"
        onClick={() => {
          console.log("adasd");
        }}
      >
        <img src={myImage} class="icon" alt="dot" />
      </button>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          padding: 10,
        }}
      >
        <div className="header">
          <input type="search" />
          <div style={{ width: 10 }}></div>
          <select>
            <option>1</option>
            <option>2</option>
          </select>
          <div style={{ width: 10 }}></div>
          <input type="datetime-local" />
        </div>
        <div>
          <a href="#" style={{ float: "right", marginTop: -20 }}>
            Xuat thong ke
          </a>
        </div>
      </div>
      <div className="content">
        <table>
          <tr
            style={{
              backgroundColor: "#f6f6f7",
              width: "100%",
            }}
          >
            <th style={{ width: "2%" }}>#</th>
            <th style={{ width: "10%" }}>Ngày xuất bản</th>
            <th style={{ width: "10%" }}>Hình đại diện</th>
            <th style={{ textAlign: "left" }}>Tên bài viết</th>
            <th style={{ width: "5%" }}>Lượt xem</th>
            <th style={{ width: "5%" }}>Chia sẻ</th>
            <th style={{ width: "5%" }}>Trạng thái</th>
            <th style={{ width: "5%" }}>Thao tác</th>
          </tr>
          {data3.map((item) => (
            <tr key={item.id} className="borderBottom">
              <td>{item.a}</td>
              <td>{item.b}</td>
              <td>{item.c}</td>
              <td>{item.d}</td>
              <td style={{ textAlign: "right" }}>{item.e}</td>
              <td style={{ textAlign: "right" }}>{item.f}</td>
              <td style={{ textAlign: "right" }}>
                <Status />
              </td>
              <td style={{ textAlign: "center" }}>
                <Button />
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Bai3;
